import FavoriteList from "./_sections/FavoritesList";

export default function page (){
    
    return <div className="flex flex-col my-[15svh] gap-24 ">
        <h1 className="container-large text-display font-semibold">Tus favoritos</h1>
        <FavoriteList/>
    </div>
}