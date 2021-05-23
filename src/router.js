import loginRoutes from "./routes/login.routes";

export default (app) => {
  app.use("/api", loginRoutes);
};
