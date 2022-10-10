$(document).ready(function () {
  $.ajax({
    type: "POST",
    url: "https://541.ir/fronttest/fronttest.php",
    data: "param=main",
    dataType: "json",
    success: function (data) {
      const showresults = document.getElementById("showresults");
      const sufix = document.getElementById("sufix-file");
      const countItems = Object.keys(data.items);
      console.log(countItems);
      for (let i = 0; i < countItems.length; i++) {
        sufix.innerHTML = `
          <img class="showDetals" onclick="showDetailMini(${data.items["فایل 1"]})" src="./assets/image/wordDetail2.png" alt="" />
          <img class="showDetals" onclick="showDetailMini(${data.items["فایل 2"]})" src="./assets/image/wordDetail2.png" alt="" />
          <img class="loadMore" src="./assets/image/wordDetail2.png" alt="" />`;
      }

      showresults.innerHTML = `
          <tr class="table-head">
            <th colspan="5">${data.title}</th>
          </tr>
          <tr>
            <td class="table-col1">ناشر</td>
            <td class="table-col2">${data.publisher}</td>
            <td class="table-col1">قابلیت ویرایش</td>
            <td class="table-col2">${data.edit}</td>
          </tr>
          <tr>
            <td class="table-col1">پسوند فایل</td>
            <td class="table-col2">${data.extension}</td>
            <td class="table-col1">قابلیت پرینت</td>
            <td class="table-col2">${data.print}</td>
          </tr>
          <tr>
            <td class="table-col1">نرم افزار ویرایش</td>
            <td class="table-col2">${data.editor}</td>
            <td class="table-col1">حجم فایل</td>
            <td class="table-col2">${data.size}</td>
          </tr>
          <tr>
            <td class="table-col1">دسته بندی</td>
            <td class="table-col2" colspan="3">
              ${data.categories}
            </td>
          </tr>
          <tr>
            <td class="table-col1">مقاله آموزشی</td>
            <td class="table-col2" colspan="3">
              ${data.post}
            </td>
          </tr>

          <tr>
            <td class="table-col1">توضیحات</td>
            <td class="table-col3" colspan="3">
               <ul>
                <li>
                  ${data.description}
                </li>
              </ul>
            </td>
          </tr>
     
        `;
    },
  });
  $(".selectPsd").click(function () {
    $.ajax({
      type: "POST",
      url: "https://541.ir/fronttest/fronttest.php",
      data: "param=psd",
      dataType: "json",
      success: function (data) {
        const showresults = document.getElementById("showresults");
        const sufix = document.getElementById("sufix-file");
        const countItems = Object.keys(data.items);
        console.log(countItems);
        for (let i = 0; i < countItems.length; i++) {
          sufix.innerHTML = `
            <img class="showDetals" onclick="showDetailMini(${data.items["فایل 3"]})" src="./assets/image/wordDetail2.png" alt="" />
            <img class="showDetals" onclick="showDetailMini(${data.items["فایل 4"]})" src="./assets/image/wordDetail2.png" alt="" />
            <img class="loadMore" src="./assets/image/wordDetail2.png" alt="" />`;
        }
        showresults.innerHTML = `
        <table>
          <tr class="table-head">
            <th colspan="5">${data.item_data.title}</th>
          </tr>
          <tr>
            <td class="table-col1">ناشر</td>
            <td class="table-col2">${data.item_data.publisher}</td>
            <td class="table-col1">قابلیت ویرایش</td>
            <td class="table-col2">${data.item_data.edit}</td>
          </tr>
          <tr>
            <td class="table-col1">پسوند فایل</td>
            <td class="table-col2">${data.item_data.extension}</td>
            <td class="table-col1">قابلیت پرینت</td>
            <td class="table-col2">${data.item_data.print}</td>
          </tr>
          <tr>
            <td class="table-col1">نرم افزار ویرایش</td>
            <td class="table-col2">${data.item_data.editor}</td>
            <td class="table-col1">حجم فایل</td>
            <td class="table-col2">${data.item_data.size}</td>
          </tr>
          <tr>
            <td class="table-col1">دسته بندی</td>
            <td class="table-col2" colspan="3">
              ${data.item_data.categories}
            </td>
          </tr>
          <tr>
            <td class="table-col1">مقاله آموزشی</td>
            <td class="table-col2" colspan="3">
              ${data.item_data.post}
            </td>
          </tr>

          <tr>
            <td class="table-col1">توضیحات</td>
            <td class="table-col3" colspan="3">
               <ul>
                <li>
                  ${data.item_data.description}
                </li>
              </ul>
            </td>
          </tr>
        </table>
        `;
      },
    });
  });
  $(".selectWord").click(function () {
    $.ajax({
      type: "POST",
      url: "https://541.ir/fronttest/fronttest.php",
      data: "param=docx",
      dataType: "json",
      success: function (data) {
        console.log(data);
        console.log(data.items);
        const sufix = document.getElementById("sufix-file");
        const countItems = Object.keys(data.items);
        console.log(countItems);
        for (let i = 0; i < countItems.length; i++) {
          sufix.innerHTML = `
            <img class="showDetals" onclick="showDetailMini(${data.items["فایل 1"]})" src="./assets/image/wordDetail2.png" alt="" />
            <img class="showDetals" onclick="showDetailMini(${data.items["فایل 2"]})" src="./assets/image/wordDetail2.png" alt="" />
            <img class="loadMore" src="./assets/image/wordDetail2.png" alt="" />`;
        }
        const showresults = document.getElementById("showresults");
        showresults.innerHTML = `
        <table>
          <tr class="table-head">
            <th colspan="5">${data.item_data.title}</th>
          </tr>
          <tr>
            <td class="table-col1">ناشر</td>
            <td class="table-col2">${data.item_data.publisher}</td>
            <td class="table-col1">قابلیت ویرایش</td>
            <td class="table-col2">${data.item_data.edit}</td>
          </tr>
          <tr>
            <td class="table-col1">پسوند فایل</td>
            <td class="table-col2">${data.item_data.extension}</td>
            <td class="table-col1">قابلیت پرینت</td>
            <td class="table-col2">${data.item_data.print}</td>
          </tr>
          <tr>
            <td class="table-col1">نرم افزار ویرایش</td>
            <td class="table-col2">${data.item_data.editor}</td>
            <td class="table-col1">حجم فایل</td>
            <td class="table-col2">${data.item_data.size}</td>
          </tr>
          <tr>
            <td class="table-col1">دسته بندی</td>
            <td class="table-col2" colspan="3">
              ${data.item_data.categories}
            </td>
          </tr>
          <tr>
            <td class="table-col1">مقاله آموزشی</td>
            <td class="table-col2" colspan="3">
              ${data.item_data.post}
            </td>
          </tr>

          <tr>
            <td class="table-col1">توضیحات</td>
            <td class="table-col3" colspan="3">
               <ul>
                <li>
                  ${data.item_data.description}
                </li>
              </ul>
            </td>
          </tr>
        </table>
        `;
      },
    });
  });
});
function showDetailMini(id) {
  console.log(id);
  $.ajax({
    type: "POST",
    url: "https://541.ir/fronttest/fronttest.php",
    data: `param=${id}`,
    dataType: "json",
    success: function (data) {
      const showresults = document.getElementById("showresults");
      showresults.innerHTML = `
      <table>
        <tr class="table-head">
          <th colspan="5">${data.title}</th>
        </tr>
        <tr>
          <td class="table-col1">ناشر</td>
          <td class="table-col2">${data.publisher}</td>
          <td class="table-col1">قابلیت ویرایش</td>
          <td class="table-col2">${data.edit}</td>
        </tr>
        <tr>
          <td class="table-col1">پسوند فایل</td>
          <td class="table-col2">${data.extension}</td>
          <td class="table-col1">قابلیت پرینت</td>
          <td class="table-col2">${data.print}</td>
        </tr>
        <tr>
          <td class="table-col1">نرم افزار ویرایش</td>
          <td class="table-col2">${data.editor}</td>
          <td class="table-col1">حجم فایل</td>
          <td class="table-col2">${data.size}</td>
        </tr>
        <tr>
          <td class="table-col1">دسته بندی</td>
          <td class="table-col2" colspan="3">
            ${data.categories}
          </td>
        </tr>
        <tr>
          <td class="table-col1">مقاله آموزشی</td>
          <td class="table-col2" colspan="3">
            ${data.post}
          </td>
        </tr>

        <tr>
          <td class="table-col1">توضیحات</td>
          <td class="table-col3" colspan="3">
             <ul>
              <li>
                ${data.description}
              </li>
            </ul>
          </td>
        </tr>
      </table>
      `;
    },
  });
}
