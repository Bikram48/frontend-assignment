export async function fetchProducts() {
  const request = await fetch("https://fakestoreapi.com/products");
  return request.json();
}

export async function fetchSingleProduct(id) {
  const request = await fetch(`https://fakestoreapi.com/products/${id}`);
  return request.json();
}
