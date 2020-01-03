let title = document.getElementById("thetitle");
var target = document.getElementById('foo');
if (title.textContent == "index") {
    let loader = document.querySelector(".loaderwrap")
    loader.style.display = "block";
    console.log("hi index");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://challenge.thef2e.com/api/thef2e2019/stage6/rooms");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader(
        "Authorization",
        "Bearer S9MXtRLZayPv5ssV5VwvL6abhYzo65LbpJxPFoeJyNBk9J4pciM4G2xp0my4"
    );
    xhr.send();
    console.log(xhr);
    //   var arr = [];
    var data;
    xhr.onload = function() {
        loader.style.display = "none"
        data = JSON.parse(xhr.response).items;
        console.log(data);
        console.log(data[0].imageUrl);
        // for (let i = 0; i < data.length; i++) {
        //   arr.push(data[i].imageUrl);
        // }
        // 以下正片

        // let link1 = document.querySelector("#link1");
        // link1.addEventListener('click', function() { window.location.href = `information.html?${data[0].id}` }, false);
        let indexbody = document.querySelector(".indexbody");
        let right_navbar_ul = document.querySelector(".right_navbar_ul");
        let roomtype_number = document.querySelector(".roomtype_number");
        let roomtype_name = document.querySelector(".roomtype_name");
        // 讓其預設先顯示第四間房間圖片
        indexbody.style.backgroundImage = `url(${data[3].imageUrl})`;
        roomtype_number.textContent = "04";
        roomtype_name.textContent = "Deluxe Double Room";
        //   hover監聽
        right_navbar_ul.addEventListener(
            "mouseover",
            function(e) {
                let pointer = e.target;
                console.log(e);
                console.log(pointer.tagName);
                if (pointer.className == "right_navbar_ul_li1") {
                    console.log("滑到了1");
                    indexbody.style.backgroundImage = `url(${data[0].imageUrl})`;
                    roomtype_number.textContent = "01";
                    roomtype_name.textContent = "Single Room";
                } else if (pointer.className == "right_navbar_ul_li2") {
                    console.log("滑到了2");
                    indexbody.style.backgroundImage = `url(${data[1].imageUrl})`;
                    roomtype_number.textContent = "02";
                    roomtype_name.textContent = "Deluxe Single Room";
                } else if (pointer.className == "right_navbar_ul_li3") {
                    console.log("滑到了3");
                    indexbody.style.backgroundImage = `url(${data[2].imageUrl})`;
                    roomtype_number.textContent = "03";
                    roomtype_name.textContent = "Double Room";
                } else if (pointer.className == "right_navbar_ul_li4") {
                    console.log("滑到了4");
                    indexbody.style.backgroundImage = `url(${data[3].imageUrl})`;
                    roomtype_number.textContent = "04";
                    roomtype_name.textContent = "Deluxe Double Room";
                } else if (pointer.className == "right_navbar_ul_li5") {
                    console.log("滑到了5");
                    indexbody.style.backgroundImage = `url(${data[4].imageUrl})`;
                    roomtype_number.textContent = "05";
                    roomtype_name.textContent = "Twin Room";
                } else if (pointer.className == "right_navbar_ul_li6") {
                    console.log("滑到了6");
                    indexbody.style.backgroundImage = `url(${data[5].imageUrl})`;
                    roomtype_number.textContent = "06";
                    roomtype_name.textContent = "Deluxe Twin Room";
                }
            },
            false
        );
        // 點擊轉址監聽
        right_navbar_ul.addEventListener(
            "click",
            function(e) {
                let pointer = e.target;
                if (pointer.className == "right_navbar_ul_li1") {
                    window.location.href = `information.html?${data[0].id}`;
                } else if (pointer.className == "right_navbar_ul_li2") {
                    window.location.href = `information.html?${data[1].id}`;
                } else if (pointer.className == "right_navbar_ul_li3") {
                    window.location.href = `information.html?${data[2].id}`;
                } else if (pointer.className == "right_navbar_ul_li4") {
                    window.location.href = `information.html?${data[3].id}`;
                } else if (pointer.className == "right_navbar_ul_li5") {
                    window.location.href = `information.html?${data[4].id}`;
                } else if (pointer.className == "right_navbar_ul_li6") {
                    window.location.href = `information.html?${data[5].id}`;
                }
            },
            false
        );
    };
}
// //////////////////以下第二頁///////////////////////
else if (title.textContent == "index2") {
    let loader2 = document.querySelector(".loaderwrap2")
    loader2.style.display = "block";
    console.log("hi index2");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://challenge.thef2e.com/api/thef2e2019/stage6/rooms");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader(
        "Authorization",
        "Bearer S9MXtRLZayPv5ssV5VwvL6abhYzo65LbpJxPFoeJyNBk9J4pciM4G2xp0my4"
    );
    xhr.send();
    console.log(xhr);
    var data;
    xhr.onload = function() {
        loader2.style.display = "none";
        data = JSON.parse(xhr.response).items;
        console.log(data);
        //六塊div
        let index2bottom = document.querySelector(".index2bottom");

        let str = "";
        for (let i = 0; i < data.length; i++) {
            str =
                str +
                `<div class="index2bottom_div index2bottom_div` +
                (i + 1) +
                `" style="background-image: url('${data[i].imageUrl}')">
     <div class="index2bottom_div_text">
     <h2>${data[i].name}</h2>
     <h3>單人房</h3>
     <span class="index2bottom_div_text_price">
     <h2>NT.${data[i].normalDayPrice} 平日</h2>
     <h3>NT.${data[i].holidayPrice} 假日</h3>
     </span>
     </div>
    </div>`;
            console.log(data[i].imageUrl);
        }
        index2bottom.innerHTML = str;

        // 輪播大背景
        var rolling = document.querySelector(".rolling");
        // 每一秒跑一次i++,並且在i=5執行完時i=0 並無限迴圈
        // setTimeout(
        //     function test() {
        //         // let i = 0
        //         // if (i < 6) {
        //         //     i = i + 1
        //         // }
        //         for (let i = 0; i < data.length; i++) {
        //             console.log(i)
        //         }

        //     }, 1000)
        for (let i = 0; i < data.length; i++) {
            window.setTimeout(function() {
                rolling.style.backgroundImage = `url(${data[i].imageUrl})`;
                console.log("執行第一次settimeout,結束後刪除");
            }, 3000 * i);
        }
        setInterval(function test() {
            for (let i = 0; i < data.length; i++) {
                window.setTimeout(function() {
                    rolling.style.backgroundImage = `url(${data[i].imageUrl})`;
                    console.log("已達18秒執行setInterval,內容為settimeout每三秒一次換圖");
                }, 3000 * i);
            }
        }, 18000);
        // for (let i = 0; i < data.length; i++) {
        //     rolling.style.backgroundImage = `url(${data[i].imageUrl})`
        // }
        // 點擊轉址監聽
        // right_navbar_ul.addEventListener("click", function(e) {
        //     let pointer = e.target
        //     if (pointer.className == "right_navbar_ul_li1") { window.location.href = `information.html?${data[0].id}` } else if (pointer.className == "right_navbar_ul_li2") { window.location.href = `information.html?${data[1].id}` } else if (pointer.className == "right_navbar_ul_li3") { window.location.href = `information.html?${data[2].id}` } else if (pointer.className == "right_navbar_ul_li4") { window.location.href = `information.html?${data[3].id}` } else if (pointer.className == "right_navbar_ul_li5") { window.location.href = `information.html?${data[4].id}` } else if (pointer.className == "right_navbar_ul_li6") { window.location.href = `information.html?${data[5].id}` }
        // }, false)

        index2bottom.addEventListener(
            "click",
            function(e) {
                let pointer = e.target;
                if (pointer.classList[1] == "index2bottom_div1") {
                    window.location.href = `information.html?${data[0].id}`;
                } else if (pointer.classList[1] == "index2bottom_div2") {
                    window.location.href = `information.html?${data[1].id}`;
                } else if (pointer.classList[1] == "index2bottom_div3") {
                    window.location.href = `information.html?${data[2].id}`;
                } else if (pointer.classList[1] == "index2bottom_div4") {
                    window.location.href = `information.html?${data[3].id}`;
                } else if (pointer.classList[1] == "index2bottom_div5") {
                    window.location.href = `information.html?${data[4].id}`;
                } else if (pointer.classList[1] == "index2bottom_div6") {
                    window.location.href = `information.html?${data[5].id}`;
                }
                console.log(pointer.classList[1]);
            },
            false
        );
    };
}
// 以下info頁面
else {
    let loaderInfo = document.querySelector(".loaderwrapInfo")
    loaderInfo.style.display = "block";
    console.log("hi infopage");
    // 預設?+上頁id,此變數為去除過?的id
    var idaddress = location.search.substr(1);
    var xhr = new XMLHttpRequest();
    xhr.open(
        "GET",
        `https://challenge.thef2e.com/api/thef2e2019/stage6/room/${idaddress}`
    );
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader(
        "Authorization",
        "Bearer S9MXtRLZayPv5ssV5VwvL6abhYzo65LbpJxPFoeJyNBk9J4pciM4G2xp0my4"
    );
    xhr.send();
    console.log(xhr);

    // post資料
    // fetch(`https://challenge.thef2e.com/api/thef2e2019/stage6/room/${idaddress}`,
    //   {
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json',
    //       'Authorization': "Bearer S9MXtRLZayPv5ssV5VwvL6abhYzo65LbpJxPFoeJyNBk9J4pciM4G2xp0my4",
    //       "Sec-Fetch-Mode": "cors"
    //     },
    //     method: "POST",
    //     body: JSON.stringify({
    //       "name": "王萬鈞",
    //       "tel": "09938183930",
    //       "date": ["2019-09-05", "2019-09-08"]
    //     })
    //   })
    //   .then(dataWrappedByPromise => dataWrappedByPromise.json())
    //   .then(data => {
    //     // you can access your data here
    //     console.log(data['message'])
    //   })
    //   // 專門解Promise的奇怪公式,如果成功是不會有[message的]
    //   // .then(function (res) {
    //   //   console.log(res.json())
    //   // })
    //   .catch(function (res) { console.log(res) })

    // 刪除資料
    function deleteallthestuff() {
        fetch(`https://challenge.thef2e.com/api/thef2e2019/stage6/rooms`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer S9MXtRLZayPv5ssV5VwvL6abhYzo65LbpJxPFoeJyNBk9J4pciM4G2xp0my4",
                    "Sec-Fetch-Mode": "cors"
                },
                method: "DELETE",
            })
            .then(function(res) { console.log(res) })
            .catch(function(res) { console.log(res) })
    }
    var data;
    var dataroom;
    var startdate;
    var enddate;
    xhr.onload = function() {
        data = JSON.parse(xhr.response);
        console.log(data);
        dataroom = data.room[0];
        console.log(dataroom);

        // 頂部背景圖
        let picturetopleft = document.querySelector(".index3_topwrapper_left");
        let picturetoprighttop = document.querySelector(
            ".index3_topwrapper_right_top"
        );
        let picturetoprightbot = document.querySelector(
            ".index3_topwrapper_right_bot"
        );
        picturetopleft.style.backgroundImage = `url(${dataroom.imageUrl[0]})`;
        picturetoprighttop.style.backgroundImage = `url(${dataroom.imageUrl[1]})`;
        picturetoprightbot.style.backgroundImage = `url(${dataroom.imageUrl[2]})`;

        // Lightbox改圖
        let index3_topwrapper_left_lightbox = document.querySelector(".index3_topwrapper_left_lightbox");
        let index3_topwrapper_right_lightbox = document.querySelector(".index3_topwrapper_right_lightbox");
        let index3_topwrapper_rightbot_lightbox = document.querySelector(".index3_topwrapper_rightbot_lightbox");
        index3_topwrapper_left_lightbox.setAttribute("href", `${dataroom.imageUrl[0]}`);
        index3_topwrapper_right_lightbox.setAttribute("href", `${dataroom.imageUrl[1]}`);
        index3_topwrapper_rightbot_lightbox.setAttribute("href", `${dataroom.imageUrl[2]}`)

        // 預約按鈕顯示
        var floating = document.querySelector('.floating')
        var datebtn = document.querySelector('.datebtn')
        datebtn.addEventListener("click", function() {
            floating.style.display = "flex"
            floating.addEventListener("click", function(e) {
                if (e.target.className == 'floating') {
                    floating.style.display = "none"
                    location.reload()
                }
                var cancelbtn = document.querySelector(".floating_content_confirm_cancel")
                cancelbtn.addEventListener("click", function() { floating.style.display = "none" }, false)
            }, false);
        }, false)

        // 左上部改字
        let lefttop = document.querySelector(".index3_botwrapper_left_top");
        lefttop.childNodes[1].textContent = dataroom.name;
        lefttop.childNodes[3].childNodes[1].textContent =
            "房客人數限制：" +
            dataroom.descriptionShort.GuestMin +
            "~" +
            dataroom.descriptionShort.GuestMax;
        lefttop.childNodes[3].childNodes[3].textContent =
            "床型：" + dataroom.descriptionShort.Bed[0];
        lefttop.childNodes[3].childNodes[5].textContent =
            "衛浴數量：" + dataroom.descriptionShort["Private-Bath"] + "間";
        lefttop.childNodes[3].childNodes[7].textContent =
            "房間大小：" + dataroom.descriptionShort.Footage + "平方公尺";
        lefttop.childNodes[5].textContent = dataroom.description;

        // 左中部改字
        let checkinearly = document.querySelector(
            ".index3_botwrapper_left_mid_text_checkinearly"
        );
        let checkinlate = document.querySelector(
            ".index3_botwrapper_left_mid_text_checkinlate"
        );
        let checkout = document.querySelector(
            ".index3_botwrapper_left_mid_text_checkout"
        );
        checkinearly.textContent = dataroom.checkInAndOut.checkInEarly;
        checkinlate.textContent = dataroom.checkInAndOut.checkInLate;
        checkout.textContent = dataroom.checkInAndOut.checkOut;

        // 左下部判斷
        let leftbot = document.querySelector(".index3_botwrapper_left_bot");
        if (dataroom.amenities["Wi-Fi"] == false) {
            leftbot.childNodes[1].style.opacity = "0.3";
        }
        if (dataroom.amenities["Television"] == false) {
            leftbot.childNodes[3].style.opacity = "0.3";
        }
        if (dataroom.amenities["Great-View"] == false) {
            leftbot.childNodes[5].style.opacity = "0.3";
        }
        if (dataroom.amenities["Breakfast"] == false) {
            leftbot.childNodes[7].style.opacity = "0.3";
        }
        if (dataroom.amenities["Air-Conditioner"] == false) {
            leftbot.childNodes[9].style.opacity = "0.3";
        }
        if (dataroom.amenities["Smoke-Free"] == false) {
            leftbot.childNodes[11].style.opacity = "0.3";
        }
        if (dataroom.amenities["Mini-Bar"] == false) {
            leftbot.childNodes[13].style.opacity = "0.3";
        }
        if (dataroom.amenities["Refrigerator"] == false) {
            leftbot.childNodes[15].style.opacity = "0.3";
        }
        if (dataroom.amenities["Child-Friendly"] == false) {
            leftbot.childNodes[17].style.opacity = "0.3";
        }
        if (dataroom.amenities["Room-Service"] == false) {
            leftbot.childNodes[19].style.opacity = "0.3";
        }
        if (dataroom.amenities["Sofa"] == false) {
            leftbot.childNodes[21].style.opacity = "0.3";
        }
        if (dataroom.amenities["Pet-Friendly"] == false) {
            leftbot.childNodes[23].style.opacity = "0.3";
        }
        // 中部價格
        let mid = document.querySelector(".index3_botwrapper_right_text");
        mid.childNodes[1].textContent = "NT." + dataroom.normalDayPrice;
        mid.childNodes[5].textContent = "NT." + dataroom.holidayPrice;

        // 顯示日曆

        $(function() {

            // datepicker localiztion
            $(".selectorpath").click(function(e) {
                e.stopPropagation();
                $(this).attr("href", "javascript:void(0)");
            });
            (function(factory) {
                if (typeof define === "function" && define.amd) {
                    define(["../widgets/datepicker"], factory);
                } else {
                    factory(jQuery.datepicker);
                }
            }(function(datepicker) {
                datepicker.regional["zh-TW"] = {
                    currentText: "今天",
                    monthNames: ["一月", "二月", "三月", "四月", "五月", "六月",
                        "七月", "八月", "九月", "十月", "十一月", "十二月"
                    ],
                    monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月",
                        "七月", "八月", "九月", "十月", "十一月", "十二月"
                    ],
                    dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
                    dayNamesShort: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"],
                    dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
                    weekHeader: "週",
                    dateFormat: "yy/mm/dd",
                    firstDay: 1,
                    isRTL: false,
                    showMonthAfterYear: true,
                    yearSuffix: "年"
                };
                datepicker.setDefaults(datepicker.regional["zh-TW"]);
                return datepicker.regional["zh-TW"];
            }));
            // // datepicker 正片開始
            $("#datepicker").datepicker();
            for (let i = 0; i < data.booking.length; i++) {
                console.log(data.booking[i].date)
                console.log(parseInt(data.booking[i].date.substring(5, 7))); //數字化的月
                console.log(parseInt(data.booking[i].date.substring(8, 10))); //數字化的日
            } //api內所有的日期
            console.log(data.booking.length + '個日期被訂'); //api內日期數量
            function refreshdate() {
                var thetd = document.querySelectorAll(".ui-datepicker-calendar>tbody>tr>td[data-month]") //插件內所有td
                for (var i = 0; i < data.booking.length; i++) {
                    for (var j = 0; j < thetd.length; j++) {
                        console.log(parseInt(thetd[j].dataset.month) + 1)
                        if (parseInt(thetd[j].dataset.month) + 1 == parseInt(data.booking[i].date.substring(5, 7)) &&
                            parseInt(thetd[j].firstChild.textContent) == parseInt(data.booking[i].date.substring(8, 10))) {
                            thetd[j].firstChild.style.background = "grey"
                        }
                    }
                }
            }
            refreshdate()
                // Prev Next按鈕監聽
            let datepickerdiv = document.querySelector("#datepicker")
            datepickerdiv.addEventListener('click', function(e) {
                let pointer = e.target
                if (pointer.title == "Prev" || pointer.textContent == "Prev" || pointer.title == "Next" || pointer.textContent == "Next") {
                    refreshdate()
                }
            }, false)
        });
        // 訂房日歷外掛
        var datearray = []
        $(function() {
            $('input[name="daterange"]').daterangepicker({
                "locale": {
                    "applyLabel": "確定",
                    "cancelLabel": "取消",
                    "weekLabel": "星期",
                    "daysOfWeek": [
                        "日",
                        "一",
                        "二",
                        "三",
                        "四",
                        "五",
                        "六"
                    ],
                    "monthNames": [
                        "一月",
                        "二月",
                        "三月",
                        "四月",
                        "五月",
                        "六月",
                        "七月",
                        "八月",
                        "九月",
                        "十月",
                        "十一月",
                        "十二月"
                    ],
                    "firstDay": 1
                },
                "startDate": "01/01/2020",
                "endDate": "12/31/2020",
                "opens": "center",
                "alwaysShowCalendars": true,
            }, function(start, end, label) {
                startdate = start.format('YYYY-MM-DD')
                enddate = end.format('YYYY-MM-DD')
                console.log(start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
                console.log(startdate);
                console.log(enddate);
                console.log(start);
                console.log(start._d + '插件抓的起始日');

                var startdatereal = new Date(start._d);
                console.log(startdatereal + '真的的起始日')
                var startdaterealnumbers = startdatereal.setDate(start._d.getDate())
                console.log(startdaterealnumbers)

                var datedifference = (end - start + 1) / 86400000 - 1
                console.log(datedifference)

                var holidaynum = 0;
                var normaldaynum = 0;
                datearray = []
                    // 計算日期差數
                for (let i = 1; i < datedifference + 1; i++) {
                    // 判斷要推的日期
                    var startdaterealnumbers = new Date(startdatereal.setDate(start._d.getDate()) + 86400000 * i)
                    console.log(startdaterealnumbers)
                        // 判斷假日、平日數
                    var judgeholiday = String(startdaterealnumbers).substring(0, 3);
                    console.log(judgeholiday);
                    if (judgeholiday == "Sat") {
                        holidaynum = holidaynum + 1;
                        console.log(judgeholiday)
                    } else if (judgeholiday == "Sun") {
                        holidaynum = holidaynum + 1;
                        console.log(judgeholiday)
                    } else if (judgeholiday == "Fri" || judgeholiday == "Mon" || judgeholiday == "Tue" || judgeholiday == "Wed" || judgeholiday == "Thu") {
                        normaldaynum = normaldaynum + 1;
                        console.log(judgeholiday)
                    }
                    // 字串化後推進陣列
                    var startdaterealstr = JSON.stringify(startdaterealnumbers)
                    console.log(startdaterealstr)
                    var turningstr = startdaterealstr.substring(1, 11)
                    console.log(turningstr)
                    datearray.push(turningstr)
                }
                // 印出天數與價格
                let floating_content_dates_normalday = document.querySelector('.floating_content_dates_normalday')
                floating_content_dates_normalday.textContent = normaldaynum + "夜"
                console.log(normaldaynum);
                let floating_content_dates_holiday = document.querySelector('.floating_content_dates_holiday')
                floating_content_dates_holiday.textContent = holidaynum + "夜"
                console.log(holidaynum);
                let floating_content_price = document.querySelector('.floating_content_price')
                floating_content_price.textContent = "= NT." + (normaldaynum * dataroom.normalDayPrice + holidaynum * dataroom.holidayPrice)
                    // 
                console.log(datearray);
            });

        });

        // 監聽送出按鈕
        let floating_content_confirm_final = document.querySelector(".floating_content_confirm_final")
        let name = document.querySelector(".thenamepost")
        let tel = document.querySelector(".thetelpost")
        let loaderInfo = document.querySelector(".loaderwrapInfo")
        floating_content_confirm_final.addEventListener("click", function() {
            console.log("click final btn")
            console.log(name.value)
            console.log(tel.value)
            console.log(datearray)
            if (name.value == "" || tel.value == "") {
                alert("名字與電話必填");
                name.value = "";
                tel.value = ""
            } else {
                loaderInfo.style.display = "block";
                fetch(`https://challenge.thef2e.com/api/thef2e2019/stage6/room/${idaddress}`, {
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Authorization': "Bearer S9MXtRLZayPv5ssV5VwvL6abhYzo65LbpJxPFoeJyNBk9J4pciM4G2xp0my4",
                            "Sec-Fetch-Mode": "cors"
                        },
                        method: "POST",
                        // body: JSON.stringify({
                        //   "name": "王萬鈞",
                        //   "tel": "09938183930",
                        //   "date": ["2019-09-05", "2019-09-08"]
                        // }),
                        body: JSON.stringify({
                            "name": name.value,
                            "tel": tel.value,
                            "date": datearray
                        })
                    })
                    .then(dataWrappedByPromise => dataWrappedByPromise.json())
                    .then(data => {
                        loaderInfo.style.display = "none";
                        // you can access your data here
                        console.log(data)
                        var floating_content = document.querySelector(".floating_content")
                        if (data.success == true) {
                            console.log('成功預約')
                            alert('成功預約')
                            floating_content.style.display = "none"
                            let floating_success = document.querySelector(".floating_success")
                            floating_success.style.display = "flex"
                                // 取消變化
                            let floating_success_cancel = document.querySelector(".floating_success_cancel")
                            floating_success_cancel.addEventListener("click", function() {
                                floating.style.display = "none"
                                floating_success.style.display = "none"
                                floating_content.style.display = "block"
                                location.reload()
                            }, false)
                        } else {
                            console.log('失敗')
                            floating_content.style.display = "none"
                            let floating_fail = document.querySelector(".floating_fail")
                            floating_fail.style.display = "flex"

                            let floating_fail_cancel = document.querySelector(".floating_fail_cancel")
                            floating_fail_cancel.addEventListener("click", function() {
                                floating.style.display = "none"
                                floating_fail.style.display = "none"
                                floating_content.style.display = "block"
                            }, false)
                        }
                    })
                    // 專門解Promise的奇怪公式,如果成功是不會有[message的]
                    // .then(function (res) {
                    //   console.log(res.json())
                    // })
                    .catch(function(res) { console.log(res) })
            }
        }, false)
        loaderInfo.style.display = "none";
    };
    // 紫色onload
}