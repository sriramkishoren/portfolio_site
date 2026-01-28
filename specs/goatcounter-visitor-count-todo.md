# TODO: GoatCounter Visitor Count

## Phase 1: Homepage (index.html)
- [x] Add visitor count HTML element to footer
- [x] Add CSS styles for visitor count (with dark mode support)
- [x] Add JavaScript to fetch TOTAL site views from GoatCounter
- [x] Add GoatCounter tracking script before </body>

## Phase 2: Blog Index (personal_blog/index.html)
- [x] Add visitor count HTML element to footer
- [x] Add CSS styles for visitor count (with dark mode support)
- [x] Add JavaScript to fetch page-specific views
- [x] Add GoatCounter tracking script before </body>

## Phase 3: Post Viewer (personal_blog/post.html)
- [x] Add visitor count HTML element to header nav
- [x] Add CSS styles for visitor count (with dark mode support)
- [x] Add JavaScript to fetch views for the specific blog post from ?article= param
- [x] Add GoatCounter tracking script before </body>

## Phase 4: Blog Posts - Tracking Only (15 files)
- [x] Add GoatCounter tracking script to AI Business UseCases/ai_use_cases.html
- [x] Add GoatCounter tracking script to AI Business UseCases/ml_ai_problem_space.html
- [x] Add GoatCounter tracking script to AI Business UseCases/ml_business_usecase_classification.html
- [x] Add GoatCounter tracking script to AI Business UseCases/ml_business_usecase_clustering.html
- [x] Add GoatCounter tracking script to AI Business UseCases/ml_business_usecase_clustering_retail.html
- [x] Add GoatCounter tracking script to AI Business UseCases/ml_business_usecase_regression.html
- [x] Add GoatCounter tracking script to AI Project Management/road_framework.html
- [x] Add GoatCounter tracking script to AI Project Management/ml_al_life_cycle.html
- [x] Add GoatCounter tracking script to ML Fundamentals/ml_definition.html
- [x] Add GoatCounter tracking script to ML Fundamentals/ml_three_types.html
- [x] Add GoatCounter tracking script to ML Fundamentals/ml_concepts.html
- [x] Add GoatCounter tracking script to ML Fundamentals/ml_supervised_learning.html
- [x] Add GoatCounter tracking script to ML Fundamentals/ml_unsupervised_learning.html
- [x] Add GoatCounter tracking script to ML Fundamentals/ml_ai_performance_measures.html
- [x] Add GoatCounter tracking script to ML Fundamentals/ml_overfitting_and_Underfitting.html

## Phase 5: Testing & Validation
- [x] Verify no duplicate script inclusions (validated: each page has correct scripts)
- [x] Homepage fetches TOTAL site views from GoatCounter
- [x] Blog index fetches page-specific views
- [x] Post viewer fetches views for specific blog post from ?article= param
- [x] Dark mode CSS styling included for all visitor count elements
- [x] Graceful fallback to "0" when API fails (implemented in catch blocks)

## Implementation Complete

All 18 HTML files updated:
- 3 pages with visitor count display (index.html, personal_blog/index.html, personal_blog/post.html)
- 15 blog posts with tracking script only
