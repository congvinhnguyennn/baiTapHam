const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

const tabActive = $(".tab-item.active");
const line = $(".tabs .line");

line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";

tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    pane.classList.add("active");
  };
});


function calcScore() {
    function checkScore(e){
        return !(e<=0);
    }
    let e = document.getElementById("inputNum1").value,
        n = Number(document.getElementById("selectLocal").value),
        t = Number(document.getElementById("selectUser").value),
        u = Number(document.getElementById("inputNum2").value),
        c = Number(document.getElementById("inputNum3").value),
        l = Number(document.getElementById("inputNum4").value),
        m = !0;
    if (m &= checkScore(u) && checkScore(c) && checkScore(l)) {
        let o = u + c + l + (n + t);
        document.getElementById("txtScore").innerHTML = o >= e ? "Bạn đã đậu. Tổng điểm: " + o : "Bạn đã rớt. Tổng điểm: " + o
    } else{
        document.getElementById("txtScore").innerHTML = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0"
    }
    
}


function calcElectronic(){
    const kw_1 = 500,
    kw_2 = 650,
    kw_3 = 850,
    kw_4 = 1100,
    kw_5 = 1300;
    // calculate electronic bill then print out name and bill
    let e = document.getElementById("name").value;
        n = document.getElementById("unit").value,
        t = 0;
    0 < n && n <= 50 ? t = n * kw_1 : n > 50 && n <= 100 ? t = 50 * kw_1 + (n - 50) * kw_2 : n > 100 && n <= 200 ? t = 50 * kw_1 + 50 * kw_2 + (n - 100) * kw_3 : n > 200 && n <= 350 ? t = 50 * kw_1 + 50 * kw_2 + 100 * kw_3 + (n - 200) * kw_4 : n > 350 ? t = 50 * kw_1 + 50 * kw_2 + 100 * kw_3 + 150 * kw_4 + (n - 350) * kw_5 : alert("Số kw không hợp lệ! Vui lòng nhập lại"),
    t = new Intl.NumberFormat("vn-VN").format(t),
    document.getElementById("txtElectronic").innerHTML = "Họ tên: " + e + "; Tiền điện: " + t

}

function calcTax(){
    const tax_1 = 0.05,
    tax_2 = 0.1,
    tax_3 = 0.15,
    tax_4 = 0.2,
    tax_5 = 0.25;
    // calculate tax then print out name and tax
    let e = document.getElementById("nameInput").value;
        n = document.getElementById("income").value - 4e6 - 16e5 * document.getElementById("personInput").value,
        t = 0;
    n > 0 && n <= 6e7 ? t = .05 * n : n > 6e7 && n <= 12e7 ? t = .1 * n : n > 12e7 && n <= 21e7 ? t = .15 * n : n > 21e7 && n <= 384e6 ? t = .2 * n : n > 384e6 && n <= 624e6 ? t = .25 * n : n > 624e6 && n <= 96e7 ? t = .3 * n : n > 96e7 ? t = .35 * n : alert("Số tiền thu nhập không hợp lệ"),
    t = new Intl.NumberFormat("vn-VN").format(t),
    document.getElementById("txtTax").innerHTML = "Họ tên: " + e + "; Thuế thu nhập cá nhân: " + t

}

function calcChannel() {
    var e = document.getElementById("selectChannel").value,
        n = document.getElementById("customerCode").value,
        t = document.getElementById("inputChannel").value,
        u = document.getElementById("inputConnect").value,
        c = 0;
    "company" == e ? c = tinhTong(15, 75, 50, t, u, 5) : "user" == e ? c = tinhTong(4.5, 20.5, 7.5, t, 0, 0) : alert("Hãy chọn loại khách hàng"),
    document.getElementById("txtChannel").innerHTML = "Mã khách hàng: " + n + "; Tiền cáp: " + new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(c)
    function tinhTong(e, n, t, u, c, l) {
        var m = e + n + t * u;
        return c > 10 && (m += (c - 10) * l), m
    }
}