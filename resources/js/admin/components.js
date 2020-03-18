import Vue from 'vue'
import Layout from './views/Layout'

import Header from './views/partials/Header'
import Navbar from './views/partials/Navbar'
import LeftSideMenu from './views/partials/LeftSideMenu'
import Footer from './views/partials/Footer'

import Customers from './views/customers/Index'
import ViewCustomers from './views/customers/View'

import DataTable from './components/metronic/DataTable.vue'
import VAction from './components/metronic/goodtable/VAction.vue'
import VAction2 from './components/metronic/goodtable/VAction2.vue'
import VEmpty from './components/metronic/goodtable/VEmpty.vue'
import VHeader from './components/metronic/goodtable/VHeader.vue'
import VStatus from './components/metronic/goodtable/VStatus.vue'
import VFilter from './components/metronic/goodtable/VFilter.vue'
import VCustomFilter from './components/metronic/goodtable/VCustomFilter.vue'

import CustomerForm from './components/customers/CustomerForm.vue'

import LoginReg from './components/auth/LoginReg.vue'

import UsersIndex from './views/users/Index'
import ViewUsers from './views/users/View'
import UserDetails from './views/users/Details'


import MBadge from './components/metronic/base/MBadge.vue'
import MProgress from './components/metronic/base/MProgress.vue'

import FormsIndex from './views/forms/Index'
import ValidationForm from './views/forms/ValidationForm'

/* USE NGPRIME  Library*/
import PText from 'primevue/inputtext';
import PCheck from 'primevue/checkbox';
import PClrPicker from 'primevue/colorpicker';
import PDropdown from 'primevue/dropdown';
import PInputMask from 'primevue/inputmask';
import PInputSwitch from 'primevue/inputswitch';
import PListBox from 'primevue/listbox';
import PMultiSelect from 'primevue/multiselect';
import PPassword from 'primevue/password';
import PRadio from 'primevue/radiobutton';
import PRating from 'primevue/rating';

Vue.component('layout', Layout)

Vue.component('appHeader', Header)
Vue.component('quickNav', Navbar)
Vue.component('lsideMenu', LeftSideMenu)
Vue.component('appFooter', Footer)

Vue.component('Customers', Customers)
Vue.component('ViewCustomers', ViewCustomers)

Vue.component('DT', DataTable)
Vue.component('VAction', VAction)
Vue.component('VAction2', VAction2)
Vue.component('VEmpty', VEmpty)
Vue.component('VHeader', VHeader)
Vue.component('VStatus', VStatus)
Vue.component('VFilter', VFilter)
Vue.component('VCustomFilter', VCustomFilter)

Vue.component('CustomerForm', CustomerForm)

Vue.component('LoginReg', LoginReg)


Vue.component('UsersIndex', UsersIndex)
Vue.component('ViewUsers', ViewUsers)
Vue.component('UserDetails', UserDetails)

Vue.component('MBadge', MBadge)
Vue.component('MProgress', MProgress)

Vue.component('FormsIndex', FormsIndex)
Vue.component('ValidationForm', ValidationForm)

/* Prime Component */
Vue.component('PText', PText);
Vue.component('PCheck', PCheck);
Vue.component('PClrPicker',PClrPicker)
Vue.component('PDropdown',PDropdown)
Vue.component('PInputMask',PInputMask)
Vue.component('PInputSwitch',PInputSwitch)
Vue.component('PListBox',PListBox)
Vue.component('PMultiSelect',PMultiSelect)
Vue.component('PPassword',PPassword)
Vue.component('PRadio',PRadio)
Vue.component('PRating',PRating)




