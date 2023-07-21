export async function fetchProducts() {
  const request = await fetch("https://fakestoreapi.com/products");
  const respData = await request.json();
  return respData;
}
