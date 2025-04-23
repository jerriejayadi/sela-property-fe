import { getPropertyDetailsServer } from "@/service/property";
import { notFound } from "next/navigation";

import PropertyDetail from "./PropertyDetail";
import serverClient from "@/service/serverClient";
import { PropertyDetailProps } from "@/types/property/property";

interface DetailPropertyParams {
  params: {
    locale: string;
    params: string[];
  };
}

// ✅ Dynamic metadata generation
export async function generateMetadata({ params }: DetailPropertyParams) {
  try {
    const id = params.params[0];
    const data = await getPropertyDetailsServer({ id: params.params[0] });
    if (!data.status) {
      return {
        title: "Property Not Found | Sela Property",
        description:
          "Sorry, the property you're looking for could not be found.",
      };
    }

    const property = (data as PropertyDetailProps).result;
    return {
      title: `${property.title} | Sela Property`,
      description: `${property.title} with ${
        property.bedRoomsAmount
      } bedrooms, located in ${property.address.subdistrict}, ${
        property.address.regency
      }, ${property.address.province}. ${
        property.descriptionId || "Discover this unique property in Bali."
      }`,
      openGraph: {
        title: `${property.title} in  ${property.address.subdistrict}, ${property.address.regency}, ${property.address.province} | Sela Property`,
        description: "Explore this unique property in Bali.",
        url: `https://www.selaproperty.com/en/property/detail/${id}`,
        images: [
          {
            url: property.images[0].url, // Make sure this is absolute!
            width: 800,
            height: 600,
            alt: property.title,
          },
        ],
      },
    };
  } catch (error) {
    console.error("Metadata fetch error:", error);
    // fallback metadata in case of network/server error
    return {
      title: "Error | Sela Property",
      description: "Something went wrong while fetching the property data.",
    };
  }
}

export default async function PropertyDetailPage({
  params,
}: DetailPropertyParams) {
  const id=params.params[0]
  try{
    const data = await getPropertyDetailsServer({id:id})
    return <PropertyDetail params={params} data={data as PropertyDetailProps} />;
  } catch (error){
    notFound()
  }
}
