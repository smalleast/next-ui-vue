//自定义通用组件
import NxLayout from './common/nx-layout'
import NxLabel from './common/nx-label';
import NxDialog from './common/nx-dialog';
import NxPhoto from './common/nx-photo';
import NxDownload from './common/nx-download';
import NxCard from './common/nx-card';
import NxDelete from './common/nx-delete';
import NxIcon from './common/nx-icon';
import NxMap from './common/nx-map';
import NxButton from './common/nx-button';

export default {
  install: function (Vue) {
    Vue.component('nx-layout', NxLayout);
    Vue.component('nx-label', NxLabel);
    Vue.component('nx-dialog', NxDialog);
    Vue.component('nx-photo', NxPhoto);
    Vue.component('nx-download', NxDownload);
    Vue.component('nx-card', NxCard);
    Vue.component('nx-delete', NxDelete);
    Vue.component('nx-icon', NxIcon);
    Vue.component('nx-map', NxMap);
    Vue.component('nx-button', NxButton);
  }
}