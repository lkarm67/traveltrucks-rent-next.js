// app/catalog/[camperId]/page.tsx
import { Camper } from "@/types/camper";
import DetailsPageBlock from "@/components/DetailsPageBlock/DetailsPageBlock";

type PageProps = {
  params: {
    camperId: string;
  };
};

async function getCamperById(id: string): Promise<Camper> {
  const res = await fetch(`${process.env.API_URL}/campers/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch camper");
  }

  return res.json();
}

export default async function CamperDetailsPage({ params }: PageProps) {
  const camper = await getCamperById(params.camperId);

  return <DetailsPageBlock camper={camper} />;
}
