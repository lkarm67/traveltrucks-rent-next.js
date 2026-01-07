import { getCampers } from "@/lib/api";

const CatalogPage = async () => {
    const campers = await getCampers(1, 10);
    console.log("campers", campers);
    return (
        <div>
            <h1>Catalog</h1>
            <ul>
                {campers.campers.map(camper => (
                    <li key={camper.id}>{camper.name}</li>
                ))}
            </ul>
        </div>
    );
}
export default CatalogPage;
