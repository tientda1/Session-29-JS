let product = [];

function addProduct(id, name, price, category, quantity) {
  product.push({ id: Number(id), name, price: Number(price), category, quantity: Number(quantity) });
  console.log(` Đã thêm sản phẩm: ${name}`);
}

function displayProducts() {
  if (product.length === 0) {
    console.log(" Danh sách sản phẩm trống.");
  } else {
    console.log(" Danh sách sản phẩm:");
    console.table(product);
  }
}

function searchProductById(id) {
  let found = product.filter((ctc) => ctc.id === Number(id));
  if (found.length > 0) {
    console.log(" Những đối tượng tìm thấy:");
    console.table(found);
  } else {
    console.log("❌ Không tìm thấy sản phẩm có ID:", id);
  }
}

function updateProducts(id, newName, newPrice, newCategory, newQuantity) {
  let ctc = product.find((ctc) => ctc.id === Number(id));
  if (ctc) {
    if (newName) ctc.name = newName;
    if (!isNaN(newPrice) && newPrice !== "") ctc.price = Number(newPrice);
    if (newCategory) ctc.category = newCategory;
    if (!isNaN(newQuantity) && newQuantity !== "") ctc.quantity = Number(newQuantity);
    console.log(` Đã cập nhật sản phẩm có ID ${id}.`);
  } else {
    console.log(" Không tìm thấy sản phẩm có ID:", id);
  }
}

function removeProduct(id) {
  let index = product.findIndex((ctc) => ctc.id === Number(id));
  if (index !== -1) {
    let confirmDelete = confirm(` Bạn có chắc muốn xóa sản phẩm: ${product[index].name}?`);
    if (confirmDelete) {
      product.splice(index, 1);
      console.log(" Đã xóa sản phẩm.");
    } else {
      console.log(" Hủy xóa sản phẩm.");
    }
  } else {
    console.log(" Không tìm thấy sản phẩm có ID:", id);
  }
}

function filterByPrice(minPrice, maxPrice) {
  let filteredProducts = product.filter(
    (p) => p.price >= Number(minPrice) && p.price <= Number(maxPrice)
  );
  if (filteredProducts.length > 0) {
    console.log(` Sản phẩm trong khoảng giá từ ${minPrice} đến ${maxPrice}:`);
    console.table(filteredProducts);
  } else {
    console.log(" Không có sản phẩm nào trong khoảng giá này.");
  }
}

function showMenu() {
  let choice;
  do {
    choice = Number(
      prompt(
        " Chọn chức năng:\n1. Thêm sản phẩm vào danh sách\n2. Hiển thị tất cả sản phẩm\n3. Tìm sản phẩm theo ID\n4. Cập nhật sản phẩm theo ID\n5. Xóa sản phẩm theo ID\n6. Lọc sản phẩm theo khoảng giá\n7. Thoát"
      )
    );

    switch (choice) {
      case 1:
        let id = prompt("Nhập ID:");
        let name = prompt("Nhập tên:");
        let price = prompt("Nhập giá sản phẩm:");
        let category = prompt("Nhập danh mục sản phẩm:");
        let quantity = prompt("Nhập số lượng sản phẩm:");
        addProduct(id, name, price, category, quantity);
        break;
      case 2:
        displayProducts();
        break;
      case 3:
        let searchId = prompt("Nhập ID cần tìm:");
        searchProductById(searchId);
        break;
      case 4:
        let updateId = prompt("Nhập ID cần cập nhật:");
        let newName = prompt("Nhập tên mới (bỏ qua nếu không đổi):");
        let newPrice = prompt("Nhập giá mới (bỏ qua nếu không đổi):");
        let newCategory = prompt("Nhập danh mục mới (bỏ qua nếu không đổi):");
        let newQuantity = prompt("Nhập số lượng mới (bỏ qua nếu không đổi):");
        updateProducts(updateId, newName, newPrice, newCategory, newQuantity);
        break;
      case 5:
        let removeId = prompt("Nhập ID cần xóa:");
        removeProduct(removeId);
        break;
      case 6:
        let minPrice = prompt("Nhập giá tối thiểu:");
        let maxPrice = prompt("Nhập giá tối đa:");
        filterByPrice(minPrice, maxPrice);
        break;
      case 7:
        console.log(" Thoát chương trình.");
        break;
      default:
        console.log(" Vui lòng chọn số từ 1 đến 7.");
    }
  } while (choice !== 7);
}

showMenu();
