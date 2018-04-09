# G-Suite-Folder-Permissions-Remover
// Google App Script 
// intended to remove all sharing permisions including link sharing on a folder or team drive via it's ID.
// its been sucsesfull with sheets, docs, folders and files within the acociated ID
// https://drive.google.com/drive/x/0/folders/>thiswouldbetheid<

function removeSharePermissions() {
  var files = DriveApp.getFolderById('put-id-here').getFiles();
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
