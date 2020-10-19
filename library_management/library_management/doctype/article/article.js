// Copyright (c) 2020, Hitensh and contributors
// For license information, please see license.txt <a href="http://library:8000/desk#List/Article/List"><button type="button" class="btn btn-primary float-right">Add Article</button></a>


frappe.ui.form.on('Article', {
	// refresh: function(frm) {

	// }
  refresh: function(frm) {
        frm.add_custom_button('Create Membership', () => {
            frappe.new_doc('Library Membership', {
                library_member: frm.doc.name
            })
        })
        frm.add_custom_button('Create Transaction', () => {
            frappe.new_doc('Library Transaction', {
                library_member: frm.doc.name
            })
        })
    }
});
