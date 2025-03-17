let contact = [];

function addContact(id, name, email, phone) {
  contact.push({ id, name, email, phone });
  console.log(`Đã thêm đối tượng: ${name}`);
}

function displayContacts() {
  if (contact.length === 0) {
    console.log("Danh sách liên hệ trống.");
  } else {
    console.log("Danh sách liên hệ:");
    console.table(contact);
  }
}

function searchContactByPhone(phone) {
  let found = contact.filter((ctc) =>
    ctc.phone.toString().includes(phone.toString())
  );
  if (found.length > 0) {
    console.log("Những đối tượng tìm thấy:");
    console.table(found);
    
  } else {
    console.log("Không tìm thấy đối tượng có số điện thoại:", phone);
  }
}

function updateContact(id, newName, newEmail, newPhone) {
  let ctc = contact.find((ctc) => ctc.id === id);
  if (ctc) {
    ctc.name = newName || ctc.name;
    ctc.email = newEmail || ctc.email;
    ctc.phone = newPhone || ctc.phone;
    console.log(`Đã cập nhật thông tin của ${id}.`);
  } else {
    console.log("Không tìm thấy đối tượng có ID:", id);
  }
}

function removeContact(id) {
  let index = contact.findIndex((ctc) => ctc.id === id);
  if (index !== -1) {
    let confirmDelete = confirm(`Bạn có chắc muốn xóa ${contact[index].name}?`);
    if (confirmDelete) {
      contact.splice(index, 1);
      console.log("Đối tượng đã bị xóa.");
    } else {
      console.log("Hủy xóa đối tượng.");
    }
  } else {
    console.log("Không tìm thấy đối tượng có ID:", id);
  }
}

function showMenu() {
  let choice;
  do {
    choice = +prompt(
      "Chọn chức năng:\n1. Thêm liên hệ\n2. Hiển thị danh bạ\n3. Tìm theo số điện thoại\n4. Cập nhật thông tin liên hệ\n5. Xóa liên hệ\n6. Thoát"
    );
    switch (choice) {
      case 1:
        let id = prompt("Nhập ID:");
        let name = prompt("Nhập tên:");
        let email = prompt("Nhập email:");
        let phone = prompt("Nhập số điện thoại:");
        addContact(id, name, email, phone);
        break;
      case 2:
        displayContacts();
        break;
      case 3:
        let searchPhone = prompt("Nhập số điện thoại cần tìm:");
        searchContactByPhone(searchPhone);
        break;
      case 4:
        let updateId = prompt("Nhập ID cần cập nhật:");
        let newName = prompt("Nhập tên mới:");
        let newEmail = prompt("Nhập email mới:");
        let newPhone = prompt("Nhập số điện thoại mới:");
        updateContact(updateId, newName, newEmail, newPhone);
        break;
      case 5:
        let removeId = prompt("Nhập ID cần xóa:");
        removeContact(removeId);
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
