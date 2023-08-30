<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="dangnhap.css" />
    <script src="jquery-3.3.1.min.js"></script>
    <title>Đăng kí</title>
</head>

<body>
    <div id="container">
        <form action="connection.php" method="post" id="form-container" autocomplete="off" name="register">
            <p>Đăng ký thành viên</p>
            <label for="MSSV">Mã sinh viên<span style="color: red">*</span></label>
            <div class="wrapper">
                <input type="text" name="mssv" spellcheck="false" id="MSSV" onclick="onmouseclickout('#MSSV', 0)" />
                <span class="error-msg">Vui lòng nhập MSSV</span>
            </div>
            <label for="hoTen">Họ và tên<span style="color: red">*</span></label>
            <div class="wrapper">
                <input type="text" name="hoten" spellcheck="false" id="hoTen" onclick="onmouseclickout('#hoTen', 1)" />
                <span class="error-msg">Vui lòng nhập họ và tên</span>
            </div>
            <label for="email">Email<span style="color: red">*</span></label>
            <div class="wrapper">
                <input type="email" name="email" spellcheck="false" id="email" onclick="onmouseclickout('#email', 2)" />
                <span class="error-msg">Vui lòng nhập email</span>
            </div>
            <label for="sex">Giới tính<span style="color: red">*</span></label>
            <div class="wrapper">
                <div id="sex">
                    <input type="radio" name="gioitinh" id="male" value="Nam" onclick="radioVerify(this)" />
                    <label for="male">Nam</label>
                    <input type="radio" name="gioitinh" id="female" value="Nữ" onclick="radioVerify(this)" />
                    <label for="female">Nữ</label>
                </div>
                <span class="sex-error-msg">Vui lòng chọn mục này</span>
            </div>
            <label for="hobby">Sở thích<span style="color: red">*</span></label>
            <div class="wrapper">
                <div id="hobby">
                    <input type="checkbox" name="sothich[]" id="read" value="Đọc" onclick="checkboxesVerify(this)" />
                    <label for="read">Đọc sách</label>
                    <input type="checkbox" name="sothich[]" id="travel" value="Du lịch" onclick="checkboxesVerify(this)" />
                    <label for="travel">Du lịch</label>
                    <input type="checkbox" name="sothich[]" id="music" value="Nhạc" onclick="checkboxesVerify(this)" />
                    <label for="music">Âm nhạc</label>
                    <input type="checkbox" name="sothich[]" id="food" value="Ăn" onclick="checkboxesVerify(this)" />
                    <label for="food">Ẩm thực</label>
                    <input type="checkbox" name="sothich[]" id="other" value="Khác" onclick="checkboxesVerify(this)" />
                    <label for="other">Khác</label>
                </div>
                <span class="hobby-error-msg">Vui lòng chọn mục này</span>
            </div>
            <label for="nationality">Quốc tịch<span style="color: red">*</span></label>
            <div class="wrapper">
                <select name="quoctich" id="nationality" onchange="optionsVerify(this)">
                    <option value="">--Chọn quốc tịch--</option>
                    <option value="vn">Việt Nam</option>
                    <option value="us">Hoa Kì</option>
                    <option value="fm">Micronesia</option>
                    <option value="st">São Tomé and Príncipe</option>
                    <option value="vu">Vanuatu</option>
                    <option value="km">Comoros</option>
                    <option value="gw">Guinea-Bissau</option>
                    <option value="gm">Gambia</option>
                    <option value="tl">Timor-Leste</option>
                    <option value="ls">Lesotho</option>
                </select>
                <span class="nationality-error-msg">Vui lòng chọn mục này</span>
            </div>

            <label for="note">Ghi chú</label>
            <div class="wrapper">
                <textarea name="ghichu" cols="20" rows="10" id="note" oninput="imposeMaxLength(this)"></textarea>
                <span class="textarea-error-msg">Số kí tự tối đa là 200</span>
            </div>
            <button class="submit" type="submit" name="submit">Đăng ký</button>
            <span class="require-note">(*) Bắt buộc</span>
        </form>
    </div>

    <script src="dangnhap.js?v=1"></script>
</body>

</html>