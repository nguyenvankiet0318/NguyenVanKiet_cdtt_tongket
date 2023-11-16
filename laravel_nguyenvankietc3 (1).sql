-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 16, 2023 at 02:21 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laravel_nguyenvankietc3`
--

-- --------------------------------------------------------

--
-- Table structure for table `db_brand`
--

CREATE TABLE `db_brand` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `image` varchar(1000) DEFAULT NULL,
  `sort_order` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `metakey` varchar(255) NOT NULL,
  `metadesc` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2,
  `description` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_brand`
--

INSERT INTO `db_brand` (`id`, `name`, `slug`, `image`, `sort_order`, `metakey`, `metadesc`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`, `description`) VALUES
(6, 'Nguyen Kiet Sweara', 'nguyen-kiet-sweara', 'nguyen-kiet-swear.jpg', 0, 'nguyen-kiet-shop', 'Áo quần của shop Nguyễn Kiệt', '2023-10-04 02:04:14', '2023-10-26 04:04:57', 1, 1, 1, NULL),
(7, 'a', 'a', 'a.jpg', 1, 'a', 'a', '2023-10-26 04:37:10', '2023-10-26 04:37:10', 1, NULL, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `db_category`
--

CREATE TABLE `db_category` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `image` varchar(1000) DEFAULT NULL,
  `parent_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `sort_order` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `metakey` varchar(255) NOT NULL,
  `metadesc` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2,
  `description` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_category`
--

INSERT INTO `db_category` (`id`, `name`, `slug`, `image`, `parent_id`, `sort_order`, `metakey`, `metadesc`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`, `description`) VALUES
(5, 'Áo ngắn', 'ao-ngan', 'ao-ngan.jpg', 0, 0, 'ao-shirt', 'Áo phông ngắn', '2023-10-04 03:10:03', '2023-10-04 03:10:03', 1, NULL, 1, NULL),
(6, 'Giầy đen', 'giay-den', 'giay.jpg', 0, 1, 'giay', 'giay', '2023-10-04 03:13:25', '2023-10-19 05:29:37', 1, 1, 1, NULL),
(7, 'aaaaaa', 'aaaaaa', 'aaaaaa.jpg', 6, 2, 'aaaaa', 'aaaa', '2023-10-26 04:37:30', '2023-10-26 04:37:30', 1, NULL, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `db_config`
--

CREATE TABLE `db_config` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `author` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `zalo` varchar(255) NOT NULL,
  `facebook` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `youtube` varchar(255) NOT NULL,
  `metadesc` varchar(255) NOT NULL,
  `metakey` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(11) NOT NULL,
  `updated_by` int(11) NOT NULL,
  `status` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `db_contact`
--

CREATE TABLE `db_contact` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `content` mediumtext DEFAULT NULL,
  `replay_id` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_contact`
--

INSERT INTO `db_contact` (`id`, `user_id`, `name`, `email`, `phone`, `title`, `content`, `replay_id`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(2, 1, 'Nguyen Kiet', 'vankiet1578@gmail.com', '0366231912', 'Người thiết kế webside này', 'Admin', 1, '2023-10-04 03:15:21', '2023-10-04 03:15:21', 1, NULL, 1),
(7, 1, 'Nguyen Kiet123233111w', 'vankiet1578213@gmail.comư', NULL, NULL, '12312312ádadsasư', 1, '2023-11-15 03:50:15', '2023-11-15 03:50:15', 1, NULL, 2),
(8, 1, 'Nguyen Kiet', 'vankiet1578@gmail.com', NULL, NULL, 'a', 1, '2023-11-16 01:29:21', '2023-11-16 01:29:21', 1, NULL, 2);

-- --------------------------------------------------------

--
-- Table structure for table `db_menu`
--

CREATE TABLE `db_menu` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `table_id` int(10) UNSIGNED NOT NULL,
  `type` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2,
  `parent_id` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `sort_order` int(10) NOT NULL,
  `level` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_menu`
--

INSERT INTO `db_menu` (`id`, `name`, `link`, `table_id`, `type`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`, `parent_id`, `position`, `sort_order`, `level`) VALUES
(1, 'Áo Thun', 'ao-thun', 0, 'page', '2023-10-04 03:54:10', '2023-10-04 03:54:10', 1, NULL, 1, '0', 'mainmenu', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_order`
--

CREATE TABLE `db_order` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `note` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2,
  `delivery_name` varchar(255) DEFAULT NULL,
  `delivery_gender` varchar(255) DEFAULT NULL,
  `delivery_email` varchar(255) DEFAULT NULL,
  `delivery_phone` varchar(255) DEFAULT NULL,
  `delivery_address` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_order`
--

INSERT INTO `db_order` (`id`, `user_id`, `name`, `phone`, `email`, `address`, `note`, `created_at`, `updated_at`, `updated_by`, `status`, `delivery_name`, `delivery_gender`, `delivery_email`, `delivery_phone`, `delivery_address`) VALUES
(2, 1, 'kit', '0366231912', 'vankiet1578@gmail.com', 'Tan Nhan Phu, 1', 'admin', '2023-10-04 03:16:07', '2023-10-04 03:16:07', NULL, 1, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `db_orderdetail`
--

CREATE TABLE `db_orderdetail` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` int(10) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `price` double(8,2) NOT NULL,
  `qty` int(10) UNSIGNED NOT NULL,
  `amount` double(8,2) NOT NULL,
  `discount` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `db_post`
--

CREATE TABLE `db_post` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `topic_id` int(10) UNSIGNED NOT NULL,
  `title` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `detail` mediumtext NOT NULL,
  `image` varchar(1000) NOT NULL,
  `type` varchar(100) NOT NULL,
  `metakey` varchar(255) NOT NULL,
  `metadesc` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2,
  `description` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_post`
--

INSERT INTO `db_post` (`id`, `topic_id`, `title`, `slug`, `detail`, `image`, `type`, `metakey`, `metadesc`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`, `description`) VALUES
(2, 0, 'Hot: Thời trang phong cách \"King Vampire\" đang đi lên đỉnh xã hội!', '', 'Thông tin về phong cách áo quần thời thượng.', '.jpg', 'post', 'king-vampire', 'Chủ đề về King Vampire', '2023-10-04 03:19:09', '2023-10-04 03:19:09', 1, NULL, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `db_product`
--

CREATE TABLE `db_product` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` int(10) UNSIGNED NOT NULL,
  `brand_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `price` double(8,2) NOT NULL,
  `price_sale` double(8,2) NOT NULL,
  `image` varchar(1000) NOT NULL,
  `qty` int(10) UNSIGNED NOT NULL,
  `detail` mediumtext NOT NULL,
  `metakey` varchar(255) NOT NULL,
  `metadesc` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2,
  `description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_product`
--

INSERT INTO `db_product` (`id`, `category_id`, `brand_id`, `name`, `slug`, `price`, `price_sale`, `image`, `qty`, `detail`, `metakey`, `metadesc`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`, `description`) VALUES
(3, 6, 6, 'Giầy da nam xịn x', 'giay-da-nam-xin-x', 300000.00, 200000.00, 'giay-da-nam-xin-x.jpg', 1, 'Giầy', 'giay-da', 'Làm bằng da', '2023-10-04 03:14:39', '2023-10-04 03:14:39', 1, NULL, 1, NULL),
(5, 0, 0, 'giay vip', 'giay-vip', 123456.00, 123455.00, 'giay-vip.jpg', 1233333, 'a', 'aibietdua', 'a', '2023-11-15 02:16:22', '2023-11-15 02:16:22', 1, NULL, 1, NULL),
(6, 5, 6, 'cha biet', 'cha-biet', 224445.00, 123455.00, 'cha-biet.jpg', 321, 'a', 'a', 'a', '2023-11-15 02:16:58', '2023-11-15 02:16:58', 1, NULL, 1, NULL),
(7, 5, 6, 'quan duoi', 'quan-duoi', 55000.00, 50000.00, 'quan-duoi.jpg', 323, 'aaaa', 'duoi quan', 'aaaa', '2023-11-15 02:17:43', '2023-11-15 02:17:43', 1, NULL, 1, NULL),
(8, 5, 6, 'ao ruoi', 'ao-ruoi', 55000.00, 50000.00, 'ao-ruoi.jpg', 2333, 'aaaaaaa', 'ruoi', 'aaaaaa', '2023-11-15 02:18:21', '2023-11-15 02:18:21', 1, NULL, 1, NULL),
(9, 7, 6, 'quan ruoi', 'quan-ruoi', 55000.00, 50000.00, 'quan-ruoi.jpg', 23331, 'aaaaaaa', 'ruoi', 'aaaaaaa', '2023-11-15 02:19:02', '2023-11-15 02:19:02', 1, NULL, 1, NULL),
(10, 7, 6, 'xuc quan', 'xuc-quan', 144444.00, 123332.00, 'xuc-quan.jpg', 12222, 'asd', 'xuc', 'cus', '2023-11-15 02:20:30', '2023-11-15 02:20:30', 1, NULL, 1, NULL),
(11, 6, 6, 'giay ra', 'giay-ra', 133333.00, 111111.00, 'giay-ra.jpg', 333, 'aaaa', 'aaaaaa', 'aaaaaaaaaaa', '2023-11-15 02:21:45', '2023-11-15 02:21:45', 1, NULL, 1, NULL),
(12, 5, 6, 'Áo sạch', 'ao-sach', 55000.00, 50000.00, 'ao-sach.jpg', 3233, 'dep', 'dep', 'dep', '2023-11-15 02:22:45', '2023-11-15 02:22:45', 1, NULL, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `db_productsale`
--

CREATE TABLE `db_productsale` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `pricesale` double NOT NULL,
  `qty` int(11) UNSIGNED NOT NULL,
  `date_begin` datetime NOT NULL,
  `date_end` datetime NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(11) NOT NULL,
  `updated_by` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `db_slider`
--

CREATE TABLE `db_slider` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `link` varchar(1000) NOT NULL,
  `sort_order` int(10) UNSIGNED NOT NULL,
  `position` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_slider`
--

INSERT INTO `db_slider` (`id`, `name`, `link`, `sort_order`, `position`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`, `image`) VALUES
(14, 'slider2', '.', 1, 'slidershow', '2023-10-26 04:02:46', '2023-10-26 04:02:46', 1, NULL, 1, 'slider2.jpg'),
(15, 'slider3', '.', 2, 'slidershow', '2023-10-26 04:02:57', '2023-10-26 04:02:57', 1, NULL, 1, 'slider3.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `db_topic`
--

CREATE TABLE `db_topic` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `parent_id` int(10) UNSIGNED NOT NULL,
  `metakey` varchar(255) NOT NULL,
  `metadesc` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2,
  `sort_order` int(11) NOT NULL,
  `description` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_topic`
--

INSERT INTO `db_topic` (`id`, `name`, `slug`, `parent_id`, `metakey`, `metadesc`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`, `sort_order`, `description`) VALUES
(2, 'King Vampire', 'king-vampire', 0, 'king-vampire', 'về thời trang king vampire', '2023-10-04 03:20:04', '2023-10-04 03:20:04', 1, NULL, 1, 0, ''),
(3, 'kit', 'kit', 2, 'qừaa', 'qewads', '2023-10-04 05:07:09', '2023-10-04 05:07:09', 1, NULL, 1, 0, '');

-- --------------------------------------------------------

--
-- Table structure for table `db_user`
--

CREATE TABLE `db_user` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `roles` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2,
  `gender` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_user`
--

INSERT INTO `db_user` (`id`, `name`, `email`, `phone`, `username`, `password`, `address`, `image`, `roles`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`, `gender`) VALUES
(3, 'Nguyen Kiet', 'vankiet1578@gmail.com', '0366231912', 'Kietku007@gmail.com', 'kietku123', 'Tan Nhan Phu, 1', '.jpg', 'admin', '2023-10-18 05:24:03', '2023-10-18 05:24:03', 1, NULL, 1, ''),
(7, 'Nguyen Kiet123233', 'nvk231@gmail.com', NULL, NULL, '$2y$10$OykGS3ENWpaSR9qn0ZF9Xe0U9x9.E.yVqSUn2qpGHmYb.ZlI5Hay.', NULL, NULL, NULL, '2023-10-30 23:44:50', '2023-10-30 23:44:50', 1, NULL, 2, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_05_31_160751_create_brand_table', 1),
(6, '2023_05_31_160808_create_category_table', 1),
(7, '2023_05_31_160828_create_contact_table', 1),
(8, '2023_05_31_160844_create_menu_table', 1),
(9, '2023_05_31_160855_create_order_table', 1),
(10, '2023_05_31_160913_create_orderdetail_table', 1),
(11, '2023_05_31_160933_create_product_table', 1),
(12, '2023_05_31_160943_create_post_table', 1),
(13, '2023_05_31_160952_create_slider_table', 1),
(14, '2023_05_31_161002_create_topic_table', 1),
(15, '2023_05_31_161014_create_user_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `productstore`
--

CREATE TABLE `productstore` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` int(11) NOT NULL,
  `price` double NOT NULL,
  `qty` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(11) NOT NULL,
  `updated_by` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `db_brand`
--
ALTER TABLE `db_brand`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_category`
--
ALTER TABLE `db_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_config`
--
ALTER TABLE `db_config`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_contact`
--
ALTER TABLE `db_contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_menu`
--
ALTER TABLE `db_menu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_order`
--
ALTER TABLE `db_order`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_orderdetail`
--
ALTER TABLE `db_orderdetail`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_post`
--
ALTER TABLE `db_post`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_product`
--
ALTER TABLE `db_product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_productsale`
--
ALTER TABLE `db_productsale`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_slider`
--
ALTER TABLE `db_slider`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_topic`
--
ALTER TABLE `db_topic`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_user`
--
ALTER TABLE `db_user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `productstore`
--
ALTER TABLE `productstore`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `db_brand`
--
ALTER TABLE `db_brand`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `db_category`
--
ALTER TABLE `db_category`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `db_contact`
--
ALTER TABLE `db_contact`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `db_menu`
--
ALTER TABLE `db_menu`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `db_order`
--
ALTER TABLE `db_order`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `db_orderdetail`
--
ALTER TABLE `db_orderdetail`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `db_post`
--
ALTER TABLE `db_post`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `db_product`
--
ALTER TABLE `db_product`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `db_slider`
--
ALTER TABLE `db_slider`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `db_topic`
--
ALTER TABLE `db_topic`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `db_user`
--
ALTER TABLE `db_user`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
