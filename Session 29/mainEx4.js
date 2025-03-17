let taskList = [];

function addTask(id, name, description, startTime, status) {
    taskList.push({ id, name, description, startTime, status });
    console.log(`Đã thêm công việc: "${name}".`);
}

function displayTasks() {
    if (taskList.length === 0) {
        console.log("Danh sách công việc trống.");
    } else {
        console.log("Danh sách công việc:");
        console.table(taskList);
    }
}

function updateTaskStatus(id, newStatus) {
    let task = taskList.find(task => task.id === id);
    if (task) {
        task.status = newStatus;
        console.log(`Đã cập nhật trạng thái công việc ID ${id}.`);
    } else {
        console.log(`Không tìm thấy công việc ID ${id}.`);
    }
}

function filterTasksByStatus(status) {
    let filteredTasks = taskList.filter(task => task.status === status);
    if (filteredTasks.length > 0) {
        console.log(`Danh sách công việc có trạng thái "${status}":`);
        console.table(filteredTasks);
    } else {
        console.log(`Không có công việc nào có trạng thái "${status}".`);
    }
}

function sortTasksByStatus() {
    taskList.sort((a, b) => a.status.localeCompare(b.status));
    console.log("Danh sách công việc sau khi sắp xếp theo trạng thái:");
    console.table(taskList);
}

function showMenu() {
    let choice;
    do {
        choice = Number(prompt(
            "Chọn chức năng:\n" +
            "1. Thêm công việc\n" +
            "2. Hiển thị danh sách công việc\n" +
            "3. Cập nhật trạng thái công việc theo ID\n" +
            "4. Lọc công việc theo trạng thái\n" +
            "5. Sắp xếp công việc theo trạng thái\n" +
            "6. Thoát"
        ));

        switch (choice) {
            case 1:
                let id = prompt("Nhập ID công việc:");
                let name = prompt("Nhập tên công việc:");
                let description = prompt("Nhập mô tả công việc:");
                let startTime = prompt("Nhập thời gian bắt đầu:");
                let status = prompt("Nhập trạng thái công việc:");
                addTask(id, name, description, startTime, status);
                break;
            case 2:
                displayTasks();
                break;
            case 3:
                let updateId = prompt("Nhập ID công việc cần cập nhật:");
                let newStatus = prompt("Nhập trạng thái mới:");
                updateTaskStatus(updateId, newStatus);
                break;
            case 4:
                let filterStatus = prompt("Nhập trạng thái cần lọc:");
                filterTasksByStatus(filterStatus);
                break;
            case 5:
                sortTasksByStatus();
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
