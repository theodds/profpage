(TeX-add-style-hook
 "AntonioLineroCV"
 (lambda ()
   (TeX-add-to-alist 'LaTeX-provided-class-options
                     '(("moderncv" "11pt")))
   (TeX-add-to-alist 'LaTeX-provided-package-options
                     '(("natbib" "authoryear") ("geometry" "scale=0.8")))
   (TeX-run-style-hooks
    "latex2e"
    "moderncv"
    "moderncv11"
    "natbib"
    "geometry")
   (TeX-add-symbols
    '("cvreference" 7)
    '("cvdoublecolumn" 2)
    "rm"
    "sf"
    "tt"
    "bf"
    "it"
    "sl"
    "sc"
    "cal"
    "mit"
    "docounter")
   (LaTeX-add-counters
    "pubcounter"))
 :latex)

