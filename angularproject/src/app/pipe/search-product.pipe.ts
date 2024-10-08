import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "searchProduct",
  standalone: true,
})
export class SearchProductPipe implements PipeTransform {
  transform(products: any[], searchTerm: string): any[] {
    if (!searchTerm) return products;
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
