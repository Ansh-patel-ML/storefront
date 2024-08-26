import express, {Express, Response, Request} from "express"

const app: Express = express()
const PORT = 3000

app.get("/", (req: Request, res: Response) => {
    res.json({
        "Hello": "from the server"
    })
})

app.listen(PORT, () => {
    console.log("Server is running on PORT:", PORT)
})