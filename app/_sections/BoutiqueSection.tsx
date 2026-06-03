import Image from "next/image";

export default function BoutiqueSection() {
    return <div className="relative  h-[80vh] overflow-hidden">
        <Image src={"/Boutique.webp"} alt="Sección principal filtros arenas inmobiliaria" fill className="absolute object-cover " />
        <div className="absolute w-full h-full flex flex-col gap-5 justify-center px-10 text-background bg-linear-to-b from-transparent to-primary hover:backdrop-blur-xs  transition-all duration-300 ease-in-out ">
            <h2 className="font-semibold">Arenas Boutique</h2>
            <p className="w-full sm:w-1/2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla lacus at iaculis laoreet. Cras ornare velit nec lacinia maximus. Duis quis nunc ipsum. Integer egestas ut purus quis rutrum. Aenean et lectus finibus, vulputate velit non, tincidunt urna. Cras efficitur dui non urna ullamcorper porttitor.</p>
            <a href="https://arenasinmobiliaria.co/exclusivos/" className="border-2 w-fit px-2 py-1 rounded-md border-white text-white hover:border-accent
hover:text-accent">Saber mas...</a>
        </div>
    </div>
}