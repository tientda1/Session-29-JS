let menu = {};
function addDish(category, name, price, description) {
    if (!menu[category]) {
        menu[category] = [];
    }
    menu[category].push({ name, price: Number(price), description });
    console.log(`Đã thêm món "${name}" vào danh mục "${category}".`);
}
function removeDishByName(name) {
    let found = false;
    for (let category in menu) {
        let index = menu[category].findIndex(dish => dish.name.toLowerCase() === name.toLowerCase());
        if (index !== -1) {
            let confirmDelete = confirm(`Bạn có chắc muốn xóa món "${name}" khỏi danh mục "${category}"?`);
            if (confirmDelete) {
                menu[category].splice(index, 1);
                console.log(`Đã xóa món "${name}" khỏi danh mục "${category}".`);
                found = true;
            }
        }
    }
    if (!found) console.log(`Không tìm thấy món "${name}".`);
}
function updateDish(name, newName, newPrice, newDescription) {
    let found = false;
    for (let category in menu) {
        let dish = menu[category].find(dish => dish.name.toLowerCase() === name.toLowerCase());
        if (dish) {
            if (newName) dish.name = newName;
            if (!isNaN(newPrice) && newPrice !== "") dish.price = Number(newPrice);
            if (newDescription) dish.description = newDescription;
            console.log(`Đã cập nhật món "${name}".`);
            found = true;
        }
    }
    if (!found) console.log(`Không tìm thấy món "${name}".`);
}

function displayMenu() {
    if (Object.keys(menu).length === 0) {
        console.log("Menu hiện đang trống.");
    } else {
        console.log(" Menu nhà hàng:");
        for (let category in menu) {
            console.log(`\n Danh mục: ${category}`);
            console.table(menu[category]);
        }
    }
}

function searchDishByName(name) {
    let results = [];
    for (let category in menu) {
        let found = menu[category].filter(dish => dish.name.toLowerCase().includes(name.toLowerCase()));
        if (found.length > 0) {
            results.push({ category, dishes: found });
        }
    }
    if (results.length > 0) {
        console.log(` Kết quả tìm kiếm cho "${name}":`);
        results.forEach(res => {
            console.log(` Danh mục: ${res.category}`);
            console.table(res.dishes);
        });
    } else {
        console.log(`Không tìm thấy món "${name}".`);
    }
}
function showMenu() {
    let choice;
    do {
        choice = Number(prompt(
            "Chọn chức năng:\n" +
            "1. Thêm món ăn vào danh mục\n" +
            "2. Xóa món ăn theo tên\n" +
            "3. Cập nhật món ăn theo tên\n" +
            "4. Hiển thị toàn bộ menu\n" +
            "5. Tìm kiếm món ăn theo tên\n" +
            "6. Thoát"
        ));

        switch (choice) {
            case 1:
                let category = prompt("Nhập danh mục món ăn:");
                let name = prompt("Nhập tên món:");
                let price = prompt("Nhập giá món ăn:");
                let description = prompt("Nhập mô tả món ăn:");
                addDish(category, name, price, description);
                break;
            case 2:
                let removeName = prompt("Nhập tên món cần xóa:");
                removeDishByName(removeName);
                break;
            case 3:
                let updateName = prompt("Nhập tên món cần cập nhật:");
                let newName = prompt("Nhập tên mới (nhấn Enter để giữ nguyên):");
                let newPrice = prompt("Nhập giá mới (nhấn Enter để giữ nguyên):");
                let newDescription = prompt("Nhập mô tả mới (nhấn Enter để giữ nguyên):");
                updateDish(updateName, newName, newPrice, newDescription);
                break;
            case 4:
                displayMenu();
                break;
            case 5:
                let searchName = prompt("Nhập tên món cần tìm:");
                searchDishByName(searchName);
                break;
            case 6:
                console.log("Thoát chương trình.");
                break;
            default:
                console.log("Vui lòng chọn số từ 1 đến 6.");
        }
    } while (choice !== 6);
}

showMenu();
