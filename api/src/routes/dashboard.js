const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardControllers');
const authenticateJWT = require('../middleware/auth');

/**
 * @swagger
 * /dashboard/maior-venda:
 *   get:
 *     tags:
 *       - Dashboard
 *     summary: Retorna o cliente que mais comprou no ano atual
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: limite
 *         schema:
 *           type: integer
 *         description: O número de clientes a serem retornados, padrão é 1
 *     responses:
 *       200:
 *         description: Cliente(s) que mais comprou/compraram no ano atual
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   clienteId:
 *                     type: integer
 *                     description: ID do cliente
 *                   clienteNome:
 *                     type: string
 *                     description: Nome do cliente
 *                   totalCompras:
 *                     type: integer
 *                     description: Número total de compras do cliente
 *                   valorTotalCompras:
 *                     type: number
 *                     format: float
 *                     description: Valor total das compras do cliente
 *       500:
 *         description: Erro ao buscar o cliente que mais comprou
 */
router.get('/maior-venda', authenticateJWT, dashboardController.MaiorVenda);

/**
 * @swagger
 * /dashboard/media-venda:
 *   get:
 *     tags:
 *       - Dashboard
 *     summary: Calcula a média do valor total das vendas concluídas no ano atual
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Média do valor total das vendas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mediaValorTotal:
 *                   type: number
 *                   format: float
 *                   description: Média do valor total das vendas concluídas
 *       500:
 *         description: Erro ao calcular a média das vendas
 */
router.get('/media-venda', authenticateJWT, dashboardController.MediaVenda);

/**
 * @swagger
 * /dashboard/venda-total:
 *   get:
 *     tags:
 *       - Dashboard
 *     summary: Retorna as vendas totais do ano atual por mês
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista das vendas totais por mês
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   ano:
 *                     type: string
 *                     description: Ano da venda
 *                   label:
 *                     type: string
 *                     description: Rótulo no formato ano/mês
 *                   data:
 *                     type: number
 *                     format: float
 *                     description: Total das vendas no mês
 *       500:
 *         description: Erro ao buscar vendas totais
 */
router.get('/venda-total', authenticateJWT, dashboardController.VendasTotaisPorAno);

/**
 * @swagger
 * /dashboard/vendas-pendentes:
 *   get:
 *     tags:
 *       - Dashboard
 *     summary: Soma as vendas pendentes
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Soma as vendas pendentes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalPendentes:
 *                   type: number
 *                   format: float
 *                   description: Soma as vendas pendentes
 *       500:
 *         description: Erro ao somar as vendas pendentes
 */
router.get('/vendas-pendentes', authenticateJWT, dashboardController.VendasPendentes);

/**
 * @swagger
 * /dashboard/vendas-categorias:
 *   get:
 *     tags:
 *       - Dashboard
 *     summary: Retorna as vendas por categiras
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista das vendas por categorias
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   ano:
 *                     type: string
 *                     description: Ano da venda
 *                   label:
 *                     type: string
 *                     description: Rótulo categoria
 *                   data:
 *                     type: number
 *                     format: float
 *                     description: Total das vendas categorias
 *       500:
 *         description: Erro ao buscar vendas categorias
 */
router.get('/vendas-categorias', authenticateJWT, dashboardController.VendasPorCategoria);

/**
 * @swagger
 * /dashboard/vendas-clientes:
 *   get:
 *     tags:
 *       - Dashboard
 *     summary: Retorna as vendas por clientes
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista das vendas por clientes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   ano:
 *                     type: string
 *                     description: Ano da venda
 *                   label:
 *                     type: string
 *                     description: Rótulo clientes
 *                   data:
 *                     type: number
 *                     format: float
 *                     description: Total das vendas categorias
 *       500:
 *         description: Erro ao buscar vendas categorias
 */
router.get('/vendas-clientes', authenticateJWT, dashboardController.VendasPorClientes);


module.exports = router;