import { ReplaySubject, Observable } from 'rxjs';
import Swal from 'sweetalert2'

const SwalMsje = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success mx-2',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})

export const functionsUtils = {
  'normalize': (function () {
    var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇçÂ®Ã\n",
      to = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuuNnccARA ",
      mapping = {};

    for (var i = 0, j = from.length; i < j; i++)
      mapping[from.charAt(i)] = to.charAt(i);

    return function (str) {
      var ret = [];
      for (var i = 0, j = str.length; i < j; i++) {
        var c = str.charAt(i);
        if (mapping.hasOwnProperty(str.charAt(i)))
          ret.push(mapping[c]);
        else
          ret.push(c);
      }
      return ret.join('');
    }

  })(),
  'fileToBase64': function (file: File): Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (event) => result.next(btoa(event.target.result.toString()));
    return result;
  },

  'validateCodeCreate': function (resp) {
    if (resp.code != 201) {
      throw new Error(resp.err);
    }
  },

  'SwalMsje': function (title, des, type) {
    SwalMsje.fire(title, des, type)
  },



  'validateField': function (object, properties) {
    for (const property in properties) {

      console.log([
        typeof object == 'undefined', !object.hasOwnProperty(property), object.property == ''
      ]);

      if (typeof object == 'undefined' || !object.hasOwnProperty(property) || object.property == '') {
        return false
      }
    }
    return true
  }
};





