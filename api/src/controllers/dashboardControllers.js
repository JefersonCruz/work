const sequelize = require('../config/database');
const { QueryTypes } = require('sequelize');

const dashboardController = {
  MaiorVenda: async (req, res) => {
    try {
      const limit = req.query.limite ? parseInt(req.query.limite) : 1;
      const currentYear = new Date().getFullYear();

      const query = `
        SELECT 
          c.id AS clienteId,
          c.nome AS clienteNome,
          COUNT(v.id) AS totalCompras,
          SUM(v.valorTotal) AS valorTotalCompras
        FROM 
          clientes c
        LEFT JOIN 
          vendas v ON c.id = v.clienteId
        WHERE 
          v.status = 'concluída'
          AND strftime('%Y', v.dataVenda) = :currentYear
        GROUP BY 
          c.id, c.nome
        ORDER BY 
          valorTotalCompras DESC, totalCompras DESC
        LIMIT :limit
      `;

      const clientes = await sequelize.query(query, {
        replacements: { currentYear: currentYear.toString(), limit },
        type: QueryTypes.SELECT
      });

      res.json(clientes);
    } catch (error) {
      console.error('Erro ao listar clientes que mais compraram no ano atual:', error);
      res.status(500).json({ 
        message: "Erro ao listar clientes que mais compraram no ano atual", 
        error: error.message 
      });
    }
  },

  MediaVenda: async (req, res) => {
    try {
      const currentYear = new Date().getFullYear();

      const query = `
        SELECT 
          AVG(v.valorTotal) AS mediaValorTotal
        FROM 
          vendas v
        WHERE 
          v.status = 'concluída'
          AND strftime('%Y', v.dataVenda) = :currentYear
      `;

      const result = await sequelize.query(query, {
        replacements: { currentYear: currentYear.toString() },
        type: QueryTypes.SELECT
      });

      res.json([result[0]]);
    } catch (error) {
      console.error('Erro ao calcular a média das vendas no ano atual:', error);
      res.status(500).json({ 
        message: "Erro ao calcular a média das vendas no ano atual", 
        error: error.message 
      });
    }
  },

  VendasTotaisPorAno: async (req, res) => {
    try {
      const currentYear = new Date().getFullYear(); // Ano atual

      const query = `
        SELECT 
          strftime('%Y', v.dataVenda) AS ano,
          strftime('%Y/%m', v.dataVenda) AS label,
          SUM(v.valorTotal) AS data
        FROM 
          vendas v
        WHERE 
          v.status = 'concluída'
          AND strftime('%Y', v.dataVenda) = :currentYear
        GROUP BY 
          strftime('%Y/%m', v.dataVenda)
        ORDER BY 
          strftime('%Y/%m', v.dataVenda)
      `;

      const vendasTotais = await sequelize.query(query, {
        replacements: { currentYear: currentYear.toString() },
        type: QueryTypes.SELECT
      });

      res.json(vendasTotais);
    } catch (error) {
      console.error('Erro ao obter vendas totais do ano atual:', error);
      res.status(500).json({ 
        message: "Erro ao obter vendas totais do ano atual", 
        error: error.message 
      });
    }
  },

  VendasPendentes: async (req, res) => {
    try {
      const currentYear = new Date().getFullYear(); // Ano atual
      
      const query = `
                      SELECT 
                      COUNT(*) AS totalPendentes
                      FROM 
                      vendas v
                      WHERE 
                      v.status = 'pendente';
      `;

      const result = await sequelize.query(query, {
        replacements: { currentYear: currentYear.toString() },
        type: QueryTypes.SELECT
      });

      res.json([result[0]]);
    } catch (error) {
      console.error('Erro ao calcular ao somar as vendas pendentes:', error);
      res.status(500).json({ 
        message: "Erro ao calcular ao somar as vendas pendentes", 
        error: error.message 
      });
    }
  },

  VendasPorCategoria: async (req, res) => {
    try {
      const currentYear = new Date().getFullYear(); // Ano atual

      const query = `
        SELECT 
        strftime('%Y', v.dataVenda) AS ano,
        c.nome AS label,
        (SUM(vi.quantidade * vi.precoUnitario) / 
        (SELECT SUM(v.valorTotal) 
        FROM vendas v 
        WHERE v.status = 'concluída' 
        AND strftime('%Y', v.dataVenda) = '2024')) * 100 AS data
        FROM 
        categorias c
        JOIN 
        produtos p ON c.id = p.categoriaId
        JOIN 
        vendas_itens vi ON p.id = vi.produtoId
        JOIN 
        vendas v ON vi.vendaId = v.id
        WHERE 
        v.status = 'concluída'
        AND strftime('%Y', v.dataVenda) = :currentYear
        GROUP BY 
        c.id, c.nome
        ORDER BY 
        data DESC
      `;

      const vendasPorCategorias = await sequelize.query(query, {
        replacements: { currentYear: currentYear.toString() },
        type: QueryTypes.SELECT
      });

      res.json(vendasPorCategorias);
    } catch (error) {
      console.error('Erro ao obter vendas por categorias:', error);
      res.status(500).json({ 
        message: "Erro ao obter vendas por categorias", 
        error: error.message 
      });
    }
  },

  VendasPorClientes: async (req, res) => {
    try {
      const currentYear = new Date().getFullYear(); // Ano atual

      const query = `
        SELECT 
        strftime('%Y', v.dataVenda) AS ano,
        c.nome AS label,
        SUM(v.valorTotal) AS data
        FROM 
        clientes c
        JOIN 
        vendas v ON c.id = v.clienteId
        WHERE 
        v.status = 'concluída' AND strftime('%Y', v.dataVenda) = :currentYear
        GROUP BY 
        c.nome
        ORDER BY 
        data DESC
        LIMIT 10;
      `;

      const vendasPorClientes = await sequelize.query(query, {
        replacements: { currentYear: currentYear.toString() },
        type: QueryTypes.SELECT
      });

      res.json(vendasPorClientes);
    } catch (error) {
      console.error('Erro ao obter vendas por clientes:', error);
      res.status(500).json({ 
        message: "Erro ao obter vendas por clientes", 
        error: error.message 
      });
    }
  },
 
};

module.exports = dashboardController;