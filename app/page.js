import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import Hero from "@/app/_components/Hero";
import About from "@/app/_components/About";
import WorkList from "@/app/_components/WorkList";
import NewsList from "@/app/_components/NewsList";
import ContactForm from "@/app/_components/ContactForm";

export default function Home() {
  return (
    <>
        <Header />
        <Hero />
        <About />
        <WorkList />
        <NewsList />
        <ContactForm />
        <Footer />
    </>

  );
}
