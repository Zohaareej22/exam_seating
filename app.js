// Client-side handling for fetching data
document.addEventListener('DOMContentLoaded', () => {
    fetchDepartments();
    fetchStudents();
    fetchRooms();
});

// Fetch departments from the backend
function fetchDepartments() {
    fetch('http://localhost:3000/api/departments')
        .then(response => response.json())
        .then(data => {
            const departmentList = document.getElementById('departments-list');
            departmentList.innerHTML = '';
            data.forEach(department => {
                const listItem = document.createElement('li');
                listItem.textContent = department.name;
                departmentList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching departments:', error));
}

// Fetch students from the backend
function fetchStudents() {
    fetch('http://localhost:3000/api/students')
        .then(response => response.json())
        .then(data => {
            const studentList = document.getElementById('students-list');
            studentList.innerHTML = '';
            data.forEach(student => {
                const listItem = document.createElement('li');
                listItem.textContent = `${student.full_name} (${student.roll_no})`;
                studentList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching students:', error));
}

// Fetch rooms from the backend
function fetchRooms() {
    fetch('http://localhost:3000/api/rooms')
        .then(response => response.json())
        .then(data => {
            const roomList = document.getElementById('rooms-list');
            roomList.innerHTML = '';
            data.forEach(room => {
                const listItem = document.createElement('li');
                listItem.textContent = `${room.name} (${room.room_code})`;
                roomList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching rooms:', error));
}
