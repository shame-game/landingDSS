
fetchSheet
  .fetch({
    gSheetId: "1RzWxkaUh-YhyGE3d6dJTfTtTqwT6sAIttNXK2Xe6_9Y",
    wSheetName: "sum",
  })
  .then((rows) => {
    let content = {};
    rows.forEach(row => {
      let key = row.section;
      Object(content).hasOwnProperty(key) || Object.assign(content, { [key]: [] });
      content[key].push(row);
    });
    vams('.payclick').forEach((box) => {
      box.addEventListener('click', (e) => {
        let index = box.getAttribute('index')
        let list = [];
        list = content.pay[index]
        vam('.nameds').setAttribute('value', `${list.row1}`)
        vam('#payqr').src = list.row2
        vam('body').setAttribute('style', 'overflow-y: hidden;')
        vam('#Box_1412c>.background').setAttribute('style', 'display:block')
        vam('#Box_1412c>.box').setAttribute('style', 'display:flex')
        vam('#Box_1412c .dot').classList.add('acc')
        vam('#Box_1412c .content').classList.add('acc')
        vam('#Box_1412c>.background').addEventListener('click', () => {
          vam('body').setAttribute('style', 'overflow-y: auto;')
          vam('#Box_1412c>.background').setAttribute('style', 'display:none')
          vam('#Box_1412c>.box').setAttribute('style', 'display:none')
          vam("#Box_1412c .content.acc").classList.remove('acc')
          vams('#Box_1412c .dot.acc').forEach((tab) => {
            tab.classList.remove('acc')
          })
          vams('#Box_1412c .line>p').forEach((line) => {
            line.setAttribute('style', 'display: none')
          })
        })
        vam('#Box_1412c .out').addEventListener('click', () => {
          vam('body').setAttribute('style', 'overflow-y: auto;')
          vam('#Box_1412c>.background').setAttribute('style', 'display:none')
          vam('#Box_1412c>.box').setAttribute('style', 'display:none')
        })
      })
    })

    vam('#Box_1412c .suc').addEventListener('click', () => {
      vam('#Box_1412c>.background').setAttribute('style', 'display:none')
      vam('#Box_1412c>.box').setAttribute('style', 'display:none')
      vam("#Box_1412c .content.acc").classList.remove('acc')
      vams('#Box_1412c .dot.acc').forEach((tab) => {
        tab.classList.remove('acc')
      })
      vams('#Box_1412c .line>p').forEach((tab) => {
        tab.setAttribute('style', 'display: none')
      })
      vam('body').setAttribute('style', 'overflow-y: auto;')
    })

    /*
        vams('#Box_1412c .nextt').forEach((tab, index) => {
          var contentlist = vams('#Box_1412c .content')[index + 1];
          var dotlist = vams('#Box_1412c .dot')[index + 1];
          var line = vams('#Box_1412c .line>p')[index];
          tab.addEventListener('click', () => {
            vam("#Box_1412c .content.acc").classList.remove('acc')
            contentlist.classList.add('acc')
            dotlist.classList.add('acc')
            line.setAttribute('style', 'display:block')
          })
        })
    */
    vams('#Box_1412c .back').forEach((tab, index) => {
      var contentlist = vams('#Box_1412c .content')[index + 1];
      var contentback = vams('#Box_1412c .content')[index];
      var dotlist = vams('#Box_1412c .dot')[index + 1];
      var line = vams('#Box_1412c .line>p')[index]
      const backtitle = vams('#Box_1412c .back');
      tab.addEventListener('click', () => {
        contentlist.classList.remove('acc');
        contentback.classList.add('acc')
        dotlist.classList.remove('acc')
        line.setAttribute('style', 'display: none')
      })
    })

  });

vam('#tienganhcoban').onclick = () => {
  let f =
    `<div>
    <input id="Foundation" type="radio" name="drone" value="Foundation" checked />
    <label>Foundation</label>
  </div>
  <div>
    <input id="Intermediate" type="radio" name="drone" value="Intermediate" />
    <label>Intermediate</label>
  </div>
  <div>
    <input id="Advanced" type="radio" name="drone" value="Advanced" />
    <label>Advanced</label>
  </div>`
  vam('#fieldset').innerHTML = f;
  vam('.background_popup').setAttribute('style', 'display:unset')
  vam('.popupmain').setAttribute('style', 'display:unset')
  vam('.background_popup').onclick = () => {
    vam('.background_popup').setAttribute('style', 'display:none')
    vam('.popupmain').setAttribute('style', 'display:none')
  }
}



vam('#ielts').onclick = (t) => {
  let f =
    `<div>
  <input id="Foundation" type="radio" name="drone" value=" IELTS 1: 1.0-3.5" checked />
  <label> IELTS 1: 1.0-3.5</label>
</div>
<div>
  <input id="Intermediate" type="radio" name="drone" value="IELTS 2: 3.5-5.0" />
  <label>IELTS 2: 3.5-5.0</label>
</div>
<div>
  <input id="Advanced" type="radio" name="drone" value="IELTS 3: 5.5-7.0" />
  <label>IELTS 3: 5.5-7.0</label>
</div>`
  vam('#fieldset').innerHTML = f;
  vam('.background_popup').setAttribute('style', 'display:unset')
  vam('.popupmain').setAttribute('style', 'display:unset')
  vam('.background_popup').onclick = () => {
    vam('.background_popup').setAttribute('style', 'display:none')
    vam('.popupmain').setAttribute('style', 'display:none')
  }
}

$("#popuptuvan").click(function () {

})

var urlappscript = 'https://script.google.com/macros/s/AKfycbxm7PkZnodeLC1I7Lv2QtzWEr-EuiRJ94aDICI12trDK84SjOYZNF8KyLO0fd0rsCKO7w/exec';
$(document).ready(function () {
  $("#popuptuvan").click(function () {
    // Select tất cả
    var inputValues = $(".popupforms")
      .map(function () {
        var input = $(this);
        return input.attr("name") + "=" + encodeURIComponent(input.val());
      })
      .get();
    // tạo 
    var queryString = inputValues.join("&");
    console.log(queryString);

    var radios = document.querySelectorAll('input[name="drone"]');
    console.log(radios);
    var selectedValue;
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        selectedValue = radios[i].value;
        break;
      }
    }
    let c = selectedValue

    // Log the result or use it as needed
    var fullName = document.querySelector(`.popupforms[name="name"]`).value;
    var fullsdt = document.querySelector(`.popupforms[name="phone"]`).value;


    if (fullName === "" || fullsdt === "") {
      alert('Vui lòng điền đầy đủ thông tin yêu cầu')
    } else {
      // hiển thị 
      $.ajax({
        type: "GET",
        url: urlappscript + "?" + queryString + '&' + `kh=${c}`,
        success: function (response) {
          alert('Đã gửi thành công thông tin')
        },
        error: function (error) {
          console.log('lỗi');
        },
      });
    }
  });
});