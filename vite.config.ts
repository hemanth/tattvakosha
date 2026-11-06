import fs from "node:fs";
import path from "node:path";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

const LOCAL_NINADA_V5_ONNX = "/Users/lika/labs/ninada/artifacts/ninada_v5/onnx";
const LOCAL_NINADA_DOCS_MODELS = "/Users/lika/labs/ninada/docs/models";

function ninadaLocalModelsPlugin(): Plugin {
  const attachMiddleware = (middlewares: {
    use: (fn: (req: any, res: any, next: () => void) => void) => void;
  }) => {
    middlewares.use((req, res, next) => {
      const rawUrl = String(req.url || "");
      const pathname = rawUrl.split("?")[0];
      if (!pathname.startsWith("/ninada/models/") && !pathname.startsWith("/ninada/models_mobile/")) {
        next();
        return;
      }

      const fileName = path.basename(pathname);
      if (!fileName.endsWith(".onnx")) {
        res.statusCode = 404;
        res.end("Not found");
        return;
      }

      const candidates = [
        path.join(LOCAL_NINADA_V5_ONNX, fileName),
        path.join(LOCAL_NINADA_DOCS_MODELS, fileName)
      ];

      for (const candidate of candidates) {
        if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
          const stat = fs.statSync(candidate);
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/octet-stream");
          res.setHeader("Content-Length", String(stat.size));
          res.setHeader("Cache-Control", "public, max-age=3600");
          res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
          fs.createReadStream(candidate).pipe(res);
          return;
        }
      }

      // Return explicit 404 instead of SPA index.html so synth-worker immediately tries Hugging Face CDN
      res.statusCode = 404;
      res.end("Local ONNX specialist not found; falling back to Hugging Face");
    });
  };

  return {
    name: "ninada-local-models",
    configureServer(server) {
      attachMiddleware(server.middlewares);
    },
    configurePreviewServer(server) {
      attachMiddleware(server.middlewares);
    }
  };
}

const coiHeaders = {
  "Cross-Origin-Opener-Policy": "same-origin",
  "Cross-Origin-Embedder-Policy": "credentialless",
  "Cross-Origin-Resource-Policy": "cross-origin"
};

export default defineConfig({
  base: "./",
  plugins: [react(), ninadaLocalModelsPlugin()],
  server: {
    port: 5179,
    headers: coiHeaders
  },
  preview: {
    headers: coiHeaders
  },
  build: {
    chunkSizeWarningLimit: 2200,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("tattvakosha.json")) {
            return "kosha-data";
          }
          if (id.includes("node_modules")) {
            return "vendor";
          }
        }
      }
    }
  }
});
