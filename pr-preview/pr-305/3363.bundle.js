/*! For license information please see 3363.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_carbon_ai_chat_examples_demo=self.webpackChunk_carbon_ai_chat_examples_demo||[]).push([[3363],{655:function(e,t,a){a.d(t,{I:function(){return c}});var i=a(3696),s=a(8950),o=a(6680),r=a(4452),n=a(893);function l(e){return i.createElement(o.A,{className:r("WACErrorIcon",e.className)})}function c({text:e}){const t=(0,s.u)();return i.createElement("div",{className:"WAC__inlineError"},i.createElement("div",{className:"WAC__inlineError--iconHolder"},i.createElement(l,{className:"WAC__inlineError--icon"})),i.createElement("div",{className:"WAC__inlineError--text"},i.createElement(n.R,{shouldRemoveHTMLBeforeMarkdownConversion:!0,text:e||t.errors_generalContent})))}},3363:function(e,t,a){a.r(t),a.d(t,{default:function(){return E}});var i=a(9599),s=a(3696),o=a(8710),r=a(5022),n=a(3210),l=a(4629),c=a(9890),d=a(9624),u=a(3192),h=a(619),g=a(3539),p=(a(4833),a(6073),a(236),a(1523)),m=a(7118),b=a(4574),_=a(3967),P=(a(644),a(6379),a(533),a(8950)),w=a(3167),y=a(4859),v=a(655);a(4452),a(1264),a(7323),a(3082);const f=(0,p.dI)({...m.A,attrs:{...m.A.attrs,slot:"icon"}});function C(e){const{tableTitle:t,tableDescription:a,headers:i,containerWidth:s,filterPlaceholderText:o,locale:r,_handleDownload:n,_rowsWithIDs:l,_allowFiltering:c,_handleFilterEvent:d}=e;return u.qy`<cds-custom-table
    style="--cds-chat-table-width:${s}px"
    size="md"
    locale=${r}
    .isSortable=${c}
    .useZebraStyles=${!0}
    @cds-custom-table-filtered=${d}
  >
    ${t&&u.qy`<cds-custom-table-header-title slot="title"
      >${t}</cds-custom-table-header-title
    >`}
    ${a&&u.qy`<cds-custom-table-header-description slot="description"
      >${a}</cds-custom-table-header-description
    >`}
    ${u.qy`<cds-custom-table-toolbar slot="toolbar">
      <cds-custom-table-toolbar-content>
        ${c?u.qy`<cds-custom-table-toolbar-search
              persistent
              placeholder=${o}
            ></cds-custom-table-toolbar-search>`:""}
        <cds-custom-button @click=${n}
          >${(0,b.T)(f)}</cds-custom-button
        >
      </cds-custom-table-toolbar-content>
    </cds-custom-table-toolbar>`} ${u.qy`<cds-custom-table-head>
      <cds-custom-table-header-row>
        ${i.map(e=>u.qy`<cds-custom-table-header-cell
              >${e}</cds-custom-table-header-cell
            >`)}
      </cds-custom-table-header-row>
    </cds-custom-table-head>`} ${u.qy`<cds-custom-table-body>
      ${(0,_.u)(l,e=>e.id,e=>u.qy`<cds-custom-table-row id=${e.id}
            >${e.cells.map(e=>u.qy`<cds-custom-table-cell>${e}</cds-custom-table-cell>`)}</cds-custom-table-row
          >`)}
    </cds-custom-table-body>`}
  </cds-custom-table>`}const x=[5,10,15,20,50],S="cds-aichat-table";let $=class extends u.WF{constructor(){super(...arguments),this._isValid=!0,this._currentPageNumber=1,this._rowsPerPageChanged=!1,this._rowsWithIDs=[]}updated(e){(e.has("headers")||e.has("rows"))&&void 0!==this.headers&&void 0!==this.rows&&this._calcIsTableValid(),e.has("rows")&&void 0!==this.rows&&this._initializeRowsArrays(),void 0===this._currentPageSize&&e.has("chatHeight")&&this.chatHeight!==e.get("chatHeight")&&this._initializePageSize()}_calcIsTableValid(){const e=this.headers.length;this._isValid=!this.rows.some(t=>t.cells.length!==e)}_initializeRowsArrays(){this._rowsWithIDs=[],this._filterVisibleRowIDs=new Set,this.rows.forEach((e,t)=>{const a=t.toString();this._rowsWithIDs.push({...e,id:a}),this._filterVisibleRowIDs.add(a)})}_initializePageSize(){this.chatHeight>850?this._currentPageSize=10:this._currentPageSize=5,this._allowFiltering=this.rows.length>this._currentPageSize,this._updateVisibleRows()}_handlePageChangeEvent(e){this._updateVisibleRows(e.detail?.page,e.detail?.pageSize),e.stopPropagation()}_handlePageSizeChangeEvent(e){this._rowsPerPageChanged=!0,this._currentPageSize=e.detail?.pageSize,this._updateVisibleRows(),e.stopPropagation()}_handleFilterEvent(e){this._filterVisibleRowIDs=new Set(e?.detail?.unfilteredRows.map(e=>e.id)),this._currentPageNumber=1,this._updateVisibleRows(),e.stopPropagation()}_updateVisibleRows(e=this._currentPageNumber,t=this._currentPageSize){this._currentPageNumber=e;const a=Array.from(this.renderRoot.querySelectorAll("cds-custom-table-row"));a.forEach(e=>e.style.setProperty("display","none"));const i=a.filter(e=>this._filterVisibleRowIDs.has(e.id)),s=e*t-1;for(let a=(e-1)*t;a<=s;a++)i[a]?.removeAttribute("style")}_handleDownload(){const e=[this.headers,...this.rows.map(e=>e.cells)],t=(0,d.A)(e),a=new Blob([t],{type:"text/csv;charset=utf-8;"}),i=document.createElement("a"),s=URL.createObjectURL(a);i.setAttribute("href",s),i.setAttribute("download","table-data.csv"),i.style.visibility="hidden",document.body.appendChild(i),i.click(),document.body.removeChild(i)}render(){return this.loading?u.qy`<cds-custom-table-skeleton row-count="3" column-count="2">
  </cds-custom-table-skeleton>`:this.rows.length>this._currentPageSize||this._rowsPerPageChanged?u.qy`${C(this)}
      ${function(e){const{_currentPageSize:t,_currentPageNumber:a,_filterVisibleRowIDs:i,rows:s,previousPageText:o,nextPageText:r,itemsPerPageText:n,getPaginationSupplementalText:l,getPaginationStatusText:c,_handlePageChangeEvent:d,_handlePageSizeChangeEvent:h}=e,g=i.size,p=s.length,m=x.filter(e=>e<p);return u.qy`<cds-custom-pagination
    page-size=${t}
    page=${a}
    total-items=${g}
    totalPages=${Math.ceil(g/t)}
    backward-text=${o}
    forward-text=${r}
    items-per-page-text=${n}
    .formatSupplementalText=${l}
    .formatStatusWithDeterminateTotal=${c}
    @cds-custom-pagination-changed-current=${d}
    @cds-custom-page-sizes-select-changed=${h}
  >
    ${m.map(e=>u.qy`<cds-custom-select-item value="${e}"
          >${e}</cds-custom-select-item
        >`)}
    <cds-custom-select-item value="${p}"
      >${p}</cds-custom-select-item
    >
  </cds-custom-pagination>`}({_currentPageSize:this._currentPageSize,_currentPageNumber:this._currentPageNumber,_filterVisibleRowIDs:this._filterVisibleRowIDs,rows:this.rows,previousPageText:this.previousPageText,nextPageText:this.nextPageText,itemsPerPageText:this.itemsPerPageText,getPaginationSupplementalText:this.getPaginationSupplementalText,getPaginationStatusText:this.getPaginationStatusText,_handlePageChangeEvent:this._handlePageChangeEvent,_handlePageSizeChangeEvent:this._handlePageSizeChangeEvent})}`:u.qy`${C(this)}`}};$.styles=u.AH`
    ${(0,u.iz)("cds-custom-table-header-title,\ncds-custom-table-header-description,\ncds-custom-table-toolbar{\n  position:sticky;\n  inline-size:var(--cds-chat-table-width, auto);\n  inset-inline-start:0;\n}\n\n:dir(rtl) cds-custom-table-header-title,\n:dir(rtl) cds-custom-table-header-description,\n:dir(rtl) cds-custom-table-toolbar{\n  right:0;\n  left:unset;\n}\n\ncds-custom-table-header-title,\ncds-custom-table-header-description{\n  padding:0 1rem;\n  inline-size:calc(var(--cds-chat-table-width, auto) - 1rem - 1rem);\n  margin-inline:-1rem;\n}\n\ncds-custom-table-header-description{\n  margin-block-end:-0.5rem;\n}\n\ncds-custom-pagination{\n  inline-size:100%;\n}")}
  `,(0,l.Cg)([(0,h.MZ)({type:String,attribute:"table-title"})],$.prototype,"tableTitle",void 0),(0,l.Cg)([(0,h.MZ)({type:String,attribute:"table-description"})],$.prototype,"tableDescription",void 0),(0,l.Cg)([(0,h.MZ)({type:Array})],$.prototype,"headers",void 0),(0,l.Cg)([(0,h.MZ)({type:Array})],$.prototype,"rows",void 0),(0,l.Cg)([(0,h.MZ)({type:Number,attribute:"container-width"})],$.prototype,"containerWidth",void 0),(0,l.Cg)([(0,h.MZ)({type:Number,attribute:"chat-height"})],$.prototype,"chatHeight",void 0),(0,l.Cg)([(0,h.MZ)({type:Boolean,attribute:"loading"})],$.prototype,"loading",void 0),(0,l.Cg)([(0,h.MZ)({type:String,attribute:"filter-placeholder-text"})],$.prototype,"filterPlaceholderText",void 0),(0,l.Cg)([(0,h.MZ)({type:String,attribute:"previous-page-text"})],$.prototype,"previousPageText",void 0),(0,l.Cg)([(0,h.MZ)({type:String,attribute:"next-page-text"})],$.prototype,"nextPageText",void 0),(0,l.Cg)([(0,h.MZ)({type:String,attribute:"items-per-page-text"})],$.prototype,"itemsPerPageText",void 0),(0,l.Cg)([(0,h.MZ)({type:String,attribute:"locale"})],$.prototype,"locale",void 0),(0,l.Cg)([(0,h.MZ)({type:Function,attribute:!1})],$.prototype,"getPaginationSupplementalText",void 0),(0,l.Cg)([(0,h.MZ)({type:Function,attribute:!1})],$.prototype,"getPaginationStatusText",void 0),(0,l.Cg)([(0,h.wk)()],$.prototype,"_isValid",void 0),(0,l.Cg)([(0,h.wk)()],$.prototype,"_currentPageNumber",void 0),(0,l.Cg)([(0,h.wk)()],$.prototype,"_currentPageSize",void 0),(0,l.Cg)([(0,h.wk)()],$.prototype,"_rowsPerPageChanged",void 0),(0,l.Cg)([(0,h.wk)()],$.prototype,"_filterVisibleRowIDs",void 0),(0,l.Cg)([(0,h.wk)()],$.prototype,"_rowsWithIDs",void 0),(0,l.Cg)([(0,h.wk)()],$.prototype,"_allowFiltering",void 0),(0,l.Cg)([c.oI],$.prototype,"_handlePageChangeEvent",null),(0,l.Cg)([c.oI],$.prototype,"_handlePageSizeChangeEvent",null),(0,l.Cg)([c.oI],$.prototype,"_handleFilterEvent",null),$=(0,l.Cg)([(0,g.c)(S)],$);const T=(0,n.a)({tagName:S,elementClass:$,react:s});function z(e){const{tableItem:t}=e,{title:a,description:n,headers:l,rows:c}=t,d=(0,r.d4)(e=>e.theme.carbonTheme),u=(0,r.d4)(e=>e.chatHeight),h=(0,r.d4)(e=>e.locale),g=(0,P.u)(),p=(0,o.A)(),m=(0,s.useRef)(null),[b,_]=(0,s.useState)();function f(){_(m.current?.clientWidth)}return(0,s.useLayoutEffect)(()=>{new ResizeObserver(f).observe(m.current)}),(0,s.useMemo)(()=>{const e=l.length,t=!c.some(t=>t.cells.length!==e);return t||(0,y.b)("Number of cells in the table header does not match the number of cells in one or more of the table rows. In order to render a table there needs to be the same number of columns in the table header and all of the table rows."),t},[c,l])?s.createElement(i.Sxu,{theme:w.L.includes(d)?"white":"g90"},s.createElement("div",{className:"WACTableContainer",ref:m},s.createElement(T,{tableTitle:a,tableDescription:n,headers:l,rows:c,containerWidth:b,chatHeight:u,filterPlaceholderText:g.table_filterPlaceholder,previousPageText:g.table_previousPage,nextPageText:g.table_nextPage,itemsPerPageText:g.table_itemsPerPage,getPaginationSupplementalText:function({count:e}){return p.formatMessage({id:"table_paginationSupplementalText"},{pagesCount:e})},getPaginationStatusText:function({start:e,end:t,count:a}){return p.formatMessage({id:"table_paginationStatus"},{start:e,end:t,count:a})},locale:h}))):s.createElement(v.I,null)}const E=s.memo(z)},8950:function(e,t,a){a.d(t,{L:function(){return s},u:function(){return o}});var i=a(3696);const s=i.createContext(null);function o(){return(0,i.useContext)(s)}}}]);
//# sourceMappingURL=3363.bundle.js.map