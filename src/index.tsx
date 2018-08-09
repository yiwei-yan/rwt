import * as React from "react";
import * as ReactDOM from "react-dom";
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom'
import { RouterStore } from "mobx-react-router";
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import * as store from './store';
import { Utils } from './util';

import App from './component/App'

useStrict(true) // 不允许在动作之外进行状态修改

//增加索引签名
interface StringMap<T> {
	[x: string]: T;
}

const newStore: StringMap<any> = store;

const routerStore = new RouterStore();

let rootStore: StringMap<any> = {
	routerStore,
};

for (let s in newStore) {
	let n = new Utils.FirstStr () ;
	rootStore[n.FirstToLowerCase(s)] = new newStore[s]();
}

const route = (
	<Provider {...rootStore}>
		<BrowserRouter>
			<Route path="/" component={App}>
			</Route>
		</BrowserRouter>
	</Provider>
)

const renderApp = (TheApp: any) =>
	ReactDOM.render(
		route,
		document.getElementById("root")
	);

renderApp(route);