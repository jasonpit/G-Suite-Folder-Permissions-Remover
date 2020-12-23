// Intended to remove file sharing and link sharing from all folders and files within specifide folder ID
// This script will also function on team drives with the id..
// Jason Pittman 2017
function removeSharePermissions() {
  var files = DriveApp.getFolderById('PUT-ID-HERE').getFiles();
  while (files.hasNext()) {
  var file = files.next();
    file.setSharing(DriveApp.Access.PRIVATE, DriveApp.Permission.NONE);
    var editors = file.getEditors();
    for (var i=0, l=editors.length; i<l; i++) {
      var user = editors[i];
      file.removeEditor(user);
    }        
  }
}
