import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "priceSort",
  standalone: true,
})
export class PriceSortPipe implements PipeTransform {
  transform(products: any[], order: string): any[] {
    return products.sort((a, b) =>
      order === "asc" ? a.price - b.price : b.price - a.price
    );
  }
}
