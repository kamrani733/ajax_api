const sufix = document.getElementById("sufix-file");
const showresults = document.getElementById("showresults");
$(document).ready(function () {
  $.ajax({
    type: "POST",
    url: "https://541.ir/fronttest/fronttest.php",
    data: "param=main",
    dataType: "json",
    success: function (data) {
      const countItems = Object.keys(data.items);
      for (let i = 0; i < 2; i++) {
        sufix.innerHTML += `
        <img class="showDetals" onclick="showDetailMini(${
          data.items[`${countItems[i]}`]
        })" src="./assets/image/wordDetail2.png" alt="" /> `;
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
});
function selectedType(id) {
  $.ajax({
    type: "POST",
    url: "https://541.ir/fronttest/fronttest.php",
    data: `param=${id}`,
    dataType: "json",
    success: function (data) {
      const countItems = Object.keys(data.items);
      sufix.innerHTML = "";
      for (let i = 0; i < 2; i++) {
        sufix.innerHTML += `
          <img class="showDetals" onclick="showDetailMini(${
            data.items[`${countItems[i]}`]
          })" src="./assets/image/wordDetail2.png" alt="" /> `;
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
}
function showDetailMini(id) {
  $.ajax({
    type: "POST",
    url: "https://541.ir/fronttest/fronttest.php",
    data: `param=${id}`,
    dataType: "json",
    success: function (data) {
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
