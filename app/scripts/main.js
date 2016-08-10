console.log('\'Allo \'Allo!');

/**
 * Class BulkLinks
 */
var bulkLinks = new function () {
    var self = this;
    this.txtURL = $("#txtURL");
    this.txtNumber = $("#txtNumber");
    this.txtError = $("#txtError");
    this.txtExtension = $("#txtExtension");
    this.txtListURL = $("#txtListURL");
    this.URLContainer = $("#URLContainer");
    this.numLinks = 0;

    /**
     * This function validate the form:
     *
     * Returns true if the form is ok:
     *
     * @returns {boolean}
     */
    this.isValid = function () {
        console.log("isValid()");
        if (self.txtNumber == null ||
            self.txtNumber.val() == "" ||
            self.txtURL == null ||
            self.txtURL.val() == "" ||
            self.txtExtension == null ||
            self.txtExtension.val() == ""
        ) {
            $("#txtError").show();
            console.error("Type Error 1");
            return false;
        }


        self.numLinks = parseInt(self.txtNumber.val());
        if (self.numLinks <= 0 || self.numLinks > 100) {
            $("#txtError").show();
            console.error("Type Error 2");
            return false;
        }

        return true;
    };
}();

$(document).ready(function () {
    bulkLinks.URLContainer.hide();
});

$("#frmMain").submit(function (e) {
        e.preventDefault();


        if (!bulkLinks.isValid()) {
            bulkLinks.txtError.show();
            bulkLinks.URLContainer.hide();
        }
        else {
            bulkLinks.txtError.hide();
            bulkLinks.URLContainer.show();

            var txtResult = "<ul>";
            var url = bulkLinks.txtURL.val();
            if (url.substr(-1) != '/') {
                url += '/';
            }
            for (var i = 0; i < bulkLinks.numLinks; i++) {
                txtResult += "<li>" + url + i + "." + bulkLinks.txtExtension.val() + "</li>";
            }
            txtResult += "</ul>";
            bulkLinks.txtListURL.html(txtResult);

        }
    }
);

