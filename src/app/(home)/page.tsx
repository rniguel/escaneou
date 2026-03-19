import { Form } from "./components/Form";
import { Hero } from "./components/Hero";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <main className="flex flex-col justify-center items-center gap-8 md:gap-12 text-center px-4 py-8 pt-20">
                <Hero />
                <Form />
            </main>
            <Footer />
        </>
    );
}
