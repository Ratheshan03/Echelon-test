<?php

$articles = [
    ["title" => "Sri Lanka’s economy update", "category" => "Business", "published_date" => "2025-02-01"],
    ["title" => "Stock market trends", "category" => "Finance", "published_date" => "2025-02-03"],
    ["title" => "New investment policies", "category" => "Business", "published_date" => "2025-02-02"],
    ["title" => "Tourism growth in 2025", "category" => "Travel", "published_date" => "2025-02-04"],
    ["title" => "Real estate market boom", "category" => "Business", "published_date" => "2025-01-28"],
    ["title" => "Foreign trade agreements", "category" => "Economy", "published_date" => "2025-01-25"],
    ["title" => "Tech startups in Sri Lanka", "category" => "Technology", "published_date" => "2025-01-30"],
    ["title" => "Small business tax changes", "category" => "Business", "published_date" => "2025-02-03"],
    ["title" => "Banking sector reforms", "category" => "Finance", "published_date" => "2025-02-02"],
    ["title" => "Gold prices fluctuate", "category" => "Finance", "published_date" => "2025-01-29"],
    ["title" => "Oil price hike impacts economy", "category" => "Economy", "published_date" => "2025-01-31"],
    ["title" => "Export sector growth", "category" => "Business", "published_date" => "2025-01-26"],
    ["title" => "New tax policies for 2025", "category" => "Business", "published_date" => "2025-01-27"],
    ["title" => "Infrastructure development projects", "category" => "Economy", "published_date" => "2025-02-03"],
    ["title" => "Tourism boost with new airline routes", "category" => "Travel", "published_date" => "2025-02-02"],
    ["title" => "Cryptocurrency regulations in Sri Lanka", "category" => "Finance", "published_date" => "2025-02-01"],
    ["title" => "Investment in renewable energy", "category" => "Business", "published_date" => "2025-01-24"],
    ["title" => "Sri Lanka’s trade deficit narrows", "category" => "Economy", "published_date" => "2025-01-29"],
    ["title" => "Tech exports reach new heights", "category" => "Technology", "published_date" => "2025-01-23"],
    ["title" => "Hotel industry sees record bookings", "category" => "Travel", "published_date" => "2025-01-30"]
];

// Filter and Sort Function
function filterSortArticles($category) {
    global $articles;

    // Filtering
    $filtered = array_filter($articles, function($article) use ($category) {
        return $article['category'] === $category;
    });

    // Sorting by published date (newest first)
    usort($filtered, function($a, $b) {
        return strtotime($b['published_date']) - strtotime($a['published_date']);
    });

    return $filtered;
}

// Filter "Business" category
$filteredArticles = filterSortArticles("Business");

// Display the filtered and sorted articles
echo "<pre>";
print_r($filteredArticles);
echo "</pre>";
?>


<!-- References
https://www.php.net/manual/en/function.array-filter.php -->