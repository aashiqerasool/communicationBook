AutoForm.addHooks(['EditIssue', 'InsertIssue'], {
    onSuccess: function () {
      Router.go('/issues_list');
    }
  });