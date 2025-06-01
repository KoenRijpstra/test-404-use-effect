import { notFound } from "next/navigation"

export default async function Page() {

    if (true) {
        notFound()
    }

    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}