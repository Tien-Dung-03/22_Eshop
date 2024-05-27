// JavaScript
document.addEventListener('DOMContentLoaded', function () {
    const detailButtons = document.querySelectorAll('.btn-product');
    const hangXeLinks = document.querySelectorAll('.hang-xe');

    detailButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const productId = this.dataset.id;
            searchProductsById(productId);
        });
    });

    hangXeLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const hangXe = this.dataset.hang;
            searchProducts(hangXe);
        });
    });

    document.getElementById('search-button').addEventListener('click', function () {
        const searchTerm = document.getElementById('search-input').value.toLowerCase();
        searchProducts(searchTerm);
    });

    document.getElementById('load-new-vehicles').addEventListener('click', function (event) {
        event.preventDefault();
        loadNewVehicles();
    });
});

function searchProducts(searchTerm) {
    fetch(`/api/vehicles/?search=${searchTerm}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(products => {
            showFilteredProducts(products);
        })
        .catch(error => {
            console.error('Error:', error);
            // Hiển thị thông báo lỗi trên giao diện người dùng nếu cần thiết
        });
}

function redirectToDetail(vehicleId) {
    window.location.href = `/api/vehicle/${vehicleId}/`;
}

// function searchProductsByCompany(company) {
//     fetch(`/api/vehicles/?search=${company}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(products => {
//             showFilteredProducts(products);
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             // Hiển thị thông báo lỗi trên giao diện người dùng nếu cần thiết
//         });
// }

// function searchProductsById(vehicleId) {
//     fetch(`/api/vehicle/${vehicleId}/`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(vehicle => {
//             window.location.href = `/vehicle/${vehicle.id}/`; // Chuyển hướng sau khi nhận dữ liệu
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             // Hiển thị thông báo lỗi trên giao diện người dùng nếu cần thiết
//         });
// }

function showFilteredProducts(products) {
    var html = '';
    if (products.length !== 0) {
        products.forEach(product => {
            html += `<div class="col-md-4 col-sm-6 card">
                        <img src="${product.image}" alt="">
                        <p>${product.title}</p>
                        <h6>Giá chỉ từ: <span>${product.price}</span></h6>
                        <div class="d-flex justify-content-between">
                            <button class="btn btn-product" onclick="redirectToDetail(${product.id})">
                                <span>Chi tiết</span>
                            </button>
                            <button class="btn btn-product" onclick="addToCart(${product.id})">
                                <i class="fas fa-shopping-cart"></i> Thêm vào giỏ hàng
                            </button>
                        </div>
                    </div>`;
        });
    } else {
        html += `<h1>Danh sách trống</h1>`;
    }
    document.getElementById('product-list').innerHTML = html;
}

/* *****************************Hàm Load Product******************************** */
function loadProducts() {
    fetch("/api/vehicles/")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(products => {
            showFilteredProducts(products);
        })
        .catch(error => {
            console.error('Error:', error);
            // Hiển thị thông báo lỗi trên giao diện người dùng nếu cần thiết
        });
}
loadProducts();

// Thêm hàm addToCart để xử lý sự kiện thêm vào giỏ hàng
function addToCart(productId) {
    fetch(`/cart/add/${productId}/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken')  // Đảm bảo CSRF token được gửi đi
        },
        credentials: 'same-origin'  // Đảm bảo sử dụng cùng một nguồn gốc cho session
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Xử lý kết quả nếu cần thiết
        console.log('Success:', data);
    })
    .catch(error => {
        console.error('Error:', error);
        // Hiển thị thông báo lỗi trên giao diện người dùng nếu cần thiết
    });
}

// Hàm lấy giá trị của CSRF token
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Xác định nếu cookie có tên là `name`
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function loadNewVehicles() {
    fetch("/api/vehicles/recent/")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(products => {
            showFilteredProducts(products);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}