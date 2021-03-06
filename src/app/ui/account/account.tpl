<!-- template for the account -->
<div class="siv-tpl-account">
  <div class="card mt-4 mb-4">
    <div class="card-header d-flex justify-content-between py-0">
      <ul class="nav nav-tabs card-header-tabs my-0 pt-3" role="tablist">
        <li class="nav-item">
          <a class="sieve-accounts-tab nav-link active" data-toggle="tab" role="tab">
            <span class="siv-account-name">Unnamed</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="sieve-settings-tab nav-link" data-toggle="tab" role="tab">Settings</a>
        </li>
      </ul>
      <div class="align-self-center">

        <a class="btn btn-sm btn-outline-secondary mr-1 siv-account-create" href="#" role="button">Create new script</a>

        <div id="sieve-editor-settings" class="btn-group ml-1 dropdown">
          <a class="btn btn-sm btn-outline-secondary dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            ☰
          </a>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item sieve-account-edit-settings" href="#">Edit Settings</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item sieve-account-disconnect-server" href="#">Disconnect</a>
            <a class="dropdown-item sieve-account-reconnect-server" href="#">Reconnect</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item sieve-account-capabilities" href="#">Show Server Capabilities</a>
          </div>
        </div>

      </div>
    </div>
    <div class="list-group list-group-flush tab-content">
      <div class="sieve-accounts-content tab-pane fade show active" role="tabpanel">
        <ul class="list-group list-group-flush siv-tpl-scripts">
          <!--items go here -->
        </ul>
      </div>
      <div class="sieve-settings-content tab-pane fade m-4" role="tabpanel"></div>
    </div>
  </div>
</div>