# Tên ứng dụng

- Mô tả vắn tắt tên ứng dụng ở đây (Gợi ý: ứng dụng giải quyết vấn đề gì, có các đối tượng người dùng như thế nào, có các chức năng gì...)

- Bạn có thể trải nghiệm ứng dụng ở đây [LINK](https://update-this-link)
- Một số sceenshot của ứng dụng

## CÀI ĐẶT

Hướng dẫn cài đặt và chạy sau khi pull project từ github về (Lưu ý: hướng dẫn phải chạy được). Bao gồm:
- Các phần mềm cần cài đặt
- Các gói thư viện python cần dùng (có thể sử dụng pip freeze để tạo)
- Script tạo database (Để script trong thư mục installation)
- Script tạo dữ liệu (Để script trong thư mục installation)

## THÔNG TIN THÀNH VIÊN

- Nguyễn Tiến Dũng - 21003901
- Nguyễn Trọng Nghĩa - 21031271
- Trương Xuân Hùng - 21090141
- Họ tên sv 4 - msv

## TRÁCH NHIỆM

- Thành viên 1:
    - trách nhiệm 1
    - trách nhiệm 2
- Thành viên 2
    - trách nhiệm 1
    - trách nhiệm 2
- ...

## 2. PHÂN TÍCH

### 2.1 Giới thiệu

#### 2.1.1. Mục đích

Hệ thống hỗ trợ đăng nhập, đăng xuất, chăm sóc khách hàng, đăng ký tài khoản, dự đoán chi phí, xem thông tin xe, xem giá xe, so sánh xe, tìm kiếm xe, quản lý thông tin khuyến mãi, quản lý đơn hàng cá nhân, đặt cọc, quản lý đơn hàng đã bán, sửa thông tin xe, xóa xe, thêm xe, quản lý kho hàng, quản lý nhân viên và quản lý khách hàng. Các chức năng này phải đảm bảo hiệu suất, bảo mật, khả dụng, khả năng mở rộng và dễ sử dụng. Giao diện tiêu chuẩn, tích hợp dịch vụ ngoài và tương thích với các trình duyệt phổ biến.

#### 2.1.2 Phạm vi

##### Đặc điểm của ứng dụng
Ứng dụng là một hệ thống quản lý và bán xe trực tuyến, cung cấp các chức năng như đăng nhập, đăng xuất, đăng ký tài khoản, dự đoán chi phí xe, xem thông tin xe, so sánh xe, tìm kiếm xe, quản lý đơn hàng và chăm sóc khách hàng. Ngoài ra, hệ thống còn hỗ trợ quản lý thông tin nhân viên, khách hàng, kho hàng và các chương trình khuyến mãi.

##### Phạm vi và đối tượng phục vụ của ứng dụng
- **Phạm vi**: Ứng dụng phục vụ việc quản lý và bán xe trực tuyến, hỗ trợ khách hàng, nhân viên và quản trị viên trong việc tìm kiếm, mua bán, quản lý và chăm sóc xe.
- **Đối tượng phục vụ**: Khách hàng (người mua xe), nhân viên (người tư vấn và bán xe), quản trị viên (người quản lý hệ thống và dữ liệu).

##### Nhóm các hệ thống con
1. **Quản lý người dùng**: Đăng nhập, đăng xuất, đăng ký tài khoản.
2. **Quản lý xe**: Xem thông tin xe, dự đoán chi phí, xem giá xe, so sánh xe, tìm kiếm xe.
3. **Quản lý đơn hàng**: Đặt cọc, quản lý đơn hàng cá nhân, quản lý đơn hàng đã bán.
4. **Quản lý chăm sóc khách hàng**: Chăm sóc khách hàng, thông tin khuyến mãi.
5. **Quản lý hệ thống**: Quản lý thông tin xe, kho hàng, nhân viên, khách hàng, thông tin khuyến mãi.
   
### 2.2 Phân tích yêu cầu

#### 2.2.1 Đặc tả Actors

- Actor 1 - Khách hàng: 
- Actor 2 - Nhân viên:
- Actor 3 - Quản trị:
- Actor 4 - Khách xem:

#### 2.2.2 Đặc tả Use-cases

- Danh sách các use-cases:
    - UC01: Đăng nhập (Mô tả: đăng nhập vào hệ thống)
    - UC02: Đăng xuất (Mô tả: đăng xuất khỏi hệ thống.)
    - UC03: Chăm sóc khách hàng (Mô tả: chăm sóc khách hàng của Nhân viên và Quản trị đối với Khách hàng)
    - UC04: Đăng kí tài khoản (Mô tả: tạo thêm tài khoản Khách hàng vào hệ thống.)
    - UC05: Dự đoán chi phí (Mô tả: Tạo dự đoán trước tổng giá trị chiếc xe sau khi mua.)
    - UC06: Xem xe (Mô tả: xem thông tin chiếc xe.)
    - UC07: Xem giá xe (Mô tả: Xem trước thông tin giá cả của chiếc xe)
    - UC08: So sánh xe (Mô tả: Xem thông tin xe này song song với xe khác.)
    - UC09: Tìm Kiếm xe (Mô tả: kiếm chiếc xe dựa theo tên)
    - UC10: Thông tin khuyến mãi (Mô tả: xem các thông báo và các chương trình ưu đãi dành cho các khách hàng)
    - UC11: Quản lý đơn hàng cá nhân (Mô tả: xem thông tin đơn hàng của đơn hàng)
    - UC12: Đặt cọc (Mô tả: đặt cọc xe của Khách hàng)
    - UC13: Quản lý đơn hàng đã bán (Mô tả: xem thông tin đơn hàng của đơn hàng mà nhân viên đã tư vấn và bán thành công)
    - UC14: Sửa thông tin xe (Mô tả: Sửa, thêm, xóa thông tin chiếc xe)
    - UC15: Xóa xe (Mô tả: xóa xe khỏi hệ thống)
    - UC16: Thêm xe (Mô tả: thêm xe vào hệ thống)
    - UC17: Quản lý kho hàng (Mô tả: sửa thông tin số xe còn trong kho.)
    - UC18: Quản lý nhân viên (Mô tả: quản lí thông tin nhân viên)
    - UC19: Quản lý khách hàng (Mô tả: quản lí thông tin khách hàng)
    - UC20: Quản lý thông tin khuyến mãi (Mô tả: quản lí thông tin khuyến mãi)
- Liệt kê các use-cases theo actor: (LƯU Ý: nếu phần này các chức năng thực hiện khác nhau ở mỗi actor thì ghi rõ các khác nhau đó)
    - Actor 1:
        - UC01: đăng nhập
        - UC02: Đăng xuất
        - UC03: Chăm sóc khách hàng
        - UC05: Dự đoán chi phí 
        - UC06: Xem xe 
        - UC07: Xem giá xe 
        - UC08: So sánh xe
        - UC09: Tìm Kiếm xe 
        - UC10: Thông tin khuyến mãi 
        - UC11: Quản lý đơn hàng cá nhân 
        - UC12: Đặt cọc
    - Actor 2:
        - UC01: đăng nhập
        - UC02: Đăng xuất
        - UC03: Chăm sóc khách hàng
        - UC05: Dự đoán chi phí 
        - UC06: Xem xe 
        - UC07: Xem giá xe 
        - UC08: So sánh xe
        - UC09: Tìm Kiếm xe 
        - UC10: Thông tin khuyến mãi
        - UC13: Quản lý đơn hàng đã bán
    - Actor 3:
        - UC01: đăng nhập
        - UC02: Đăng xuất
        - UC14: Sửa thông tin xe 
        - UC15: Xóa xe 
        - UC16: Thêm xe 
        - UC17: Quản lý kho hàng 
        - UC18: Quản lý nhân viên 
        - UC19: Quản lý khách hàng 
        - UC20: Quản lý thông tin khuyến mãi
    - Actor 4:
        - UC04: Đăng kí tài khoản 
        - UC05: Dự đoán chi phí 
        - UC06: Xem xe 
        - UC07: Xem giá xe 
        - UC08: So sánh xe
        - UC09: Tìm Kiếm xe 
        - UC10: Thông tin khuyến mãi 

---
