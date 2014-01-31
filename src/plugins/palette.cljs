(ns lt.plugins.palette
  (:require [lt.object :as object]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool])
  (:require-macros [lt.macros :refer [behavior]]))


(defn update-hints
  [this]
  (editor/set-options this {:paletteHints (::enabled @this)}))

(behavior ::enable
          :triggers #{:object.instant}
          :type :user
          :desc "Editor: Enable color palette hints"
          :exclusive [::disable ::enable]
          :reaction (fn [this]
                      (object/merge! this {::enabled true})
                      (update-hints this)))

(behavior ::disable
          :triggers #{:object.instant}
          :type :user
          :desc "Editor: Disable color palette hints"
          :exclusive [::enable ::disable]
          :reaction (fn [this]
                      (object/merge! this {::enabled false})
                      (update-hints this)))
