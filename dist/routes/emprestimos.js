const rotasEmprestimos = (app) => {
    app.get("/", (req, res) => {
        res.send("Olá");
    });
};
export default rotasEmprestimos;
