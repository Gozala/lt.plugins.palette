if(!lt.util.load.provided_QMARK_('lt.plugins.palette')) {
goog.provide('lt.plugins.palette');
goog.require('cljs.core');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.palette.update_hints = (function update_hints(this$){return lt.objs.editor.set_options.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"paletteHints","paletteHints",1302803587),new cljs.core.Keyword("lt.plugins.palette","enabled","lt.plugins.palette/enabled",3943485093).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))], null));
});
lt.plugins.palette.__BEH__enable = (function __BEH__enable(this$){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.palette","enabled","lt.plugins.palette/enabled",3943485093),true], null));
return lt.plugins.palette.update_hints.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.palette","enable","lt.plugins.palette/enable",4774590563),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.palette.__BEH__enable,new cljs.core.Keyword(null,"desc","desc",1016984067),"Editor: Enable color palette hints",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.palette","disable","lt.plugins.palette/disable",662664910),new cljs.core.Keyword("lt.plugins.palette","enable","lt.plugins.palette/enable",4774590563)], null));
lt.plugins.palette.__BEH__disable = (function __BEH__disable(this$){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.palette","enabled","lt.plugins.palette/enabled",3943485093),false], null));
return lt.plugins.palette.update_hints.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.palette","disable","lt.plugins.palette/disable",662664910),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.palette.__BEH__disable,new cljs.core.Keyword(null,"desc","desc",1016984067),"Editor: Disable color palette hints",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.palette","enable","lt.plugins.palette/enable",4774590563),new cljs.core.Keyword("lt.plugins.palette","disable","lt.plugins.palette/disable",662664910)], null));
}

//# sourceMappingURL=palette_compiled.js.map