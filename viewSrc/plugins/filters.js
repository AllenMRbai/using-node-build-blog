export default function filters(Vue) {
  Vue.filter("timeStampToDate", function(value) {
    if (!value) return "";
    let date = new Date(value);
    return (
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
    );
  });
}
