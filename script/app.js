const addCountBtn = document.getElementById("addCount");
const taskList = document.getElementById("tasks");

addCountBtn.onclick = function () {
    const plusBtn = document.createElement("button");
    plusBtn.textContent = "+";
    plusBtn.onclick = function () {
        num++;
        li.firstChild.textContent = num;
    };

    const li = document.createElement("li");
    let num = 0;
    li.textContent = num;

    const minusBtn = document.createElement("button");
    minusBtn.textContent = "-";
    minusBtn.onclick = function () {
        num--;
        li.firstChild.textContent = num;
    };

    li.appendChild(plusBtn);
    taskList.appendChild(li);
    li.appendChild(minusBtn);
};

const users = [];
const userForm = document.getElementById("userForm");
const tBody = document.getElementById("TBody");
const searchInput = document.getElementById("search");

function usersList(filteredUsers = users) {
    tBody.innerHTML = "";
    filteredUsers.forEach((user, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>
                <button class="btn btn-danger" onclick="deleteUser(${index})">Delete</button>
            </td>
        `;
        tBody.appendChild(tr);
    });
}

userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;

    users.push({ firstName, lastName });

    userForm.reset();

    usersList();
});

function deleteUser(index) {
    users.splice(index, 1);
    usersList();
}

searchInput.addEventListener("input", () => {
    const searc = searchInput.value.toLowerCase();
    const filteredUsers = users.filter((user) =>
        user.firstName.toLowerCase().includes(searc)
    );
    usersList(filteredUsers);
});
