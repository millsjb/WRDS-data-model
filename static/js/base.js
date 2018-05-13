function isBlank(val) {
	return (val == null || val == "" || val == "None");
}

function addDropDownOptions($select, options) {
    $select.append("<option>" + options.join("</option><option>") + "</option>");
}

function updateTable(data) {
    $("#dataLoading").hide();
    var all_data = ["1", "2", "3", "4", "5"];
  //  if (all_data.length == 0) return;

    var data = [];
    var varName = "temp val"; // temp val
    _.each(all_data, function (a) {
        data.push("<tr><td>" + varName + "</td>"
            + "<td>" + varName + "</td>"
            + "<td>" + varName + "</td>"
            + "<td>" + varName + "</td>"
            + "<td>" + varName + "</td>"
            + "<td>" + varName + "</td>");
    });

    $("#dataTableBody").html(data.join(""));
}