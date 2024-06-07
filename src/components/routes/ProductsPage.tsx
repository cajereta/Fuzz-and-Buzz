import Product from "@/lib/Product";
import { ProductItem } from "../products/ProductItem";
import { Separator } from "../ui/separator";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export const ProductsPage = ({ products }: { products: Product[] }) => {
  const [isFilter, setIsFilter] = useState("All");

  const filteredProducts = products.filter(
    (pedal) => isFilter === "All" || pedal.type === isFilter
  );
  return (
    <div className="flex flex-col container">
      <h3 className="text-5xl font-bold leading-none text-left my-12">Amps</h3>
      <div className="flex self-end w-64">
        <Select
          defaultValue={"All"}
          onValueChange={(value) => setIsFilter(value)}
        >
          <SelectTrigger id="filter">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="Amp">Amps</SelectItem>
            <SelectItem value="Pedal">Pedals</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Separator className="my-4" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 ">
        {filteredProducts.map((pedal) => (
          <ProductItem
            key={pedal.id}
            product={pedal}
            width={350}
            height={350}
            className="w-[300px]"
          />
        ))}
      </div>
    </div>
  );
};
